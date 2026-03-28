from __future__ import annotations

import time
import numpy as np
import librosa

from models import AudioAnalysisConfig, AudioFrame, AudioPeak, FeatureBounds


class AudioAnalyzer:
    """Autonomous FFT-based audio analysis pipeline with optional feature toggles."""

    def __init__(self, config: AudioAnalysisConfig | None = None):
        self.config = config or AudioAnalysisConfig()
        self._frame_index = 0
        self._prev_magnitudes: np.ndarray | None = None
        self._prev_phase: np.ndarray | None = None
        self._prev_prev_phase: np.ndarray | None = None
        self._prev_envelope: list[str] = []

    def update_config(self, config: AudioAnalysisConfig | dict) -> None:
        if isinstance(config, AudioAnalysisConfig):
            self.config = config
            return
        self.config = AudioAnalysisConfig.model_validate(config)

    def process_frame(self, y: np.ndarray) -> AudioFrame:
        frame_start = time.time()
        cfg = self.config

        mono = self._to_mono(y)
        if mono.size == 0:
            return self._empty_frame(frame_start)

        frame = self._fit_frame(mono, cfg.fft_size)

        if cfg.calc_fft:
            windowed = frame * np.hanning(cfg.fft_size)
            spectrum = np.fft.rfft(windowed)
        else:
            spectrum = np.zeros(cfg.fft_size // 2 + 1, dtype=np.complex128)

        freqs = np.fft.rfftfreq(cfg.fft_size, 1.0 / cfg.sample_rate)
        magnitudes = np.abs(spectrum) if cfg.calc_magnitude else np.zeros_like(freqs)
        power = (magnitudes ** 2) + 1e-12

        phase = np.angle(spectrum) if cfg.calc_phase else None
        if phase is not None:
            phase = np.unwrap(phase)

        local_flux = self._calc_local_flux(magnitudes) if cfg.calc_local_spectral_flux else None
        phase_dev = self._calc_phase_deviation(phase) if cfg.calc_phase_deviation and phase is not None else None

        peaks = self._build_peaks(
            freqs=freqs,
            magnitudes=magnitudes,
            phase=phase,
            phase_dev=phase_dev,
            local_flux=local_flux,
        )

        frame_model = AudioFrame(
            frame_index=self._frame_index,
            timestamp_seconds=float(frame_start),
            sample_rate=cfg.sample_rate,
            fft_size=cfg.fft_size,
            hop_size=cfg.hop_size,
            frame_size=int(mono.size),
            peaks=peaks,
        )

        self._fill_global_features(frame_model, frame, freqs, magnitudes, power)

        if cfg.normalize_features:
            self._normalize_frame(frame_model)

        self._update_state(magnitudes, phase, peaks)
        self._frame_index += 1

        return frame_model

    def _to_mono(self, y: np.ndarray) -> np.ndarray:
        arr = np.asarray(y, dtype=np.float64)
        if arr.ndim == 0:
            return np.array([], dtype=np.float64)
        if arr.ndim == 1:
            return arr
        if arr.shape[0] <= arr.shape[1]:
            return arr.mean(axis=0)
        return arr.mean(axis=1)

    def _fit_frame(self, y: np.ndarray, fft_size: int) -> np.ndarray:
        if y.size >= fft_size:
            return y[:fft_size]
        return np.pad(y, (0, fft_size - y.size), mode="constant")

    def _calc_local_flux(self, magnitudes: np.ndarray) -> np.ndarray:
        if self._prev_magnitudes is None:
            return np.zeros_like(magnitudes)
        return magnitudes - self._prev_magnitudes

    def _calc_phase_deviation(self, phase: np.ndarray) -> np.ndarray:
        if self._prev_phase is None or self._prev_prev_phase is None:
            return np.zeros_like(phase)
        return phase - (2.0 * self._prev_phase) + self._prev_prev_phase

    def _build_peaks(
        self,
        freqs: np.ndarray,
        magnitudes: np.ndarray,
        phase: np.ndarray | None,
        phase_dev: np.ndarray | None,
        local_flux: np.ndarray | None,
    ) -> list[AudioPeak]:
        cfg = self.config
        peaks: list[AudioPeak] = []

        if not self._prev_envelope or len(self._prev_envelope) != len(freqs):
            self._prev_envelope = ["sustain"] * len(freqs)

        for i, freq in enumerate(freqs):
            mag = float(magnitudes[i]) if cfg.calc_magnitude else 0.0
            dbfs = self._amp_to_dbfs(mag) if cfg.calc_magnitude_dbfs else 0.0

            flux_val = float(local_flux[i]) if local_flux is not None else None
            env = self._envelope_state(i, flux_val) if cfg.calc_envelope_state else None

            phase_val = float(phase[i]) if phase is not None and cfg.calc_phase else None
            phase_dev_val = float(phase_dev[i]) if phase_dev is not None else None

            peak = AudioPeak(
                bin_index=i,
                center_frequency_hz_raw=float(freq),
                magnitude_linear_raw=mag,
                magnitude_dbfs_raw=dbfs,
                phase_radians_raw=phase_val,
                phase_deviation_raw=phase_dev_val,
                spectral_flux_raw=flux_val,
                envelope_state=env,
            )
            peaks.append(peak)

        return peaks

    def _envelope_state(self, idx: int, flux_val: float | None) -> str:
        if flux_val is None:
            return self._prev_envelope[idx]

        prev_state = self._prev_envelope[idx]
        attack_threshold = 0.02
        release_threshold = -0.02
        sustain_band = 0.005

        if flux_val >= attack_threshold:
            return "attack"
        if flux_val <= release_threshold:
            return "release"
        if abs(flux_val) <= sustain_band:
            return "sustain"
        if prev_state == "attack":
            return "decay"
        return prev_state

    def _fill_global_features(
        self,
        frame_model: AudioFrame,
        frame: np.ndarray,
        freqs: np.ndarray,
        magnitudes: np.ndarray,
        power: np.ndarray,
    ) -> None:
        cfg = self.config

        if cfg.calc_rms_energy:
            frame_model.rms_energy_raw = float(np.sqrt(np.mean(frame ** 2)))

        if cfg.calc_peak_amplitude:
            frame_model.peak_amplitude_raw = float(np.max(np.abs(frame)))

        if cfg.calc_zero_crossing_rate:
            signs = np.signbit(frame)
            zc = np.count_nonzero(np.diff(signs))
            frame_model.zero_crossing_rate_raw = float(zc / max(1, frame.size - 1))

        centroid = None
        mag_sum = float(np.sum(magnitudes))

        if cfg.calc_spectral_centroid:
            if mag_sum > 0.0:
                centroid = float(np.sum(freqs * magnitudes) / mag_sum)
            else:
                centroid = 0.0
            frame_model.spectral_centroid_hz_raw = centroid

        if cfg.calc_global_spectral_flux:
            if self._prev_magnitudes is None:
                frame_model.global_spectral_flux_raw = 0.0
            else:
                delta = magnitudes - self._prev_magnitudes
                frame_model.global_spectral_flux_raw = float(np.sum(np.maximum(delta, 0.0)))

        if cfg.calc_spectral_flatness:
            geom = float(np.exp(np.mean(np.log(power))))
            arith = float(np.mean(power))
            frame_model.spectral_flatness_raw = float(geom / (arith + 1e-12))

        if cfg.calc_spectral_rolloff:
            cumulative = np.cumsum(power)
            threshold = cfg.rolloff_percent * float(cumulative[-1])
            idx = int(np.searchsorted(cumulative, threshold))
            idx = min(max(idx, 0), len(freqs) - 1)
            frame_model.spectral_rolloff_hz_raw = float(freqs[idx])

        if cfg.calc_spectral_spread or cfg.calc_spectral_skewness or cfg.calc_spectral_kurtosis:
            if centroid is None:
                if mag_sum > 0.0:
                    centroid = float(np.sum(freqs * magnitudes) / mag_sum)
                else:
                    centroid = 0.0

            if mag_sum > 0.0:
                centered = freqs - centroid
                spread = float(np.sum((centered ** 2) * magnitudes) / mag_sum)
            else:
                centered = np.zeros_like(freqs)
                spread = 0.0

            if cfg.calc_spectral_spread:
                frame_model.spectral_spread_raw = spread

            sigma = float(np.sqrt(max(spread, 1e-12)))
            if cfg.calc_spectral_skewness:
                if mag_sum > 0.0:
                    skew_num = float(np.sum((centered ** 3) * magnitudes) / mag_sum)
                    frame_model.spectral_skewness_raw = float(skew_num / (sigma ** 3 + 1e-12))
                else:
                    frame_model.spectral_skewness_raw = 0.0

            if cfg.calc_spectral_kurtosis:
                if mag_sum > 0.0:
                    kurt_num = float(np.sum((centered ** 4) * magnitudes) / mag_sum)
                    frame_model.spectral_kurtosis_raw = float(kurt_num / (sigma ** 4 + 1e-12))
                else:
                    frame_model.spectral_kurtosis_raw = 0.0

        if cfg.calc_mfcc:
            mfcc = librosa.feature.mfcc(
                y=frame,
                sr=cfg.sample_rate,
                n_mfcc=cfg.n_mfcc,
                n_fft=cfg.fft_size,
                hop_length=cfg.hop_size,
            )
            frame_model.mfcc_raw = [float(v) for v in np.mean(mfcc, axis=1)]

        if cfg.calc_chromagram:
            chroma = librosa.feature.chroma_stft(
                y=frame,
                sr=cfg.sample_rate,
                n_fft=cfg.fft_size,
                hop_length=cfg.hop_size,
            )
            frame_model.chromagram_raw = [float(v) for v in np.mean(chroma, axis=1)]

    def _normalize_frame(self, frame_model: AudioFrame) -> None:
        bounds = self.config.normalization_bounds

        for peak in frame_model.peaks:
            peak.center_frequency_hz_norm = self._normalize_scalar(
                peak.center_frequency_hz_raw, bounds.scalar.get("center_frequency_hz")
            )
            peak.magnitude_linear_norm = self._normalize_scalar(
                peak.magnitude_linear_raw, bounds.scalar.get("magnitude_linear")
            )
            peak.magnitude_dbfs_norm = self._normalize_scalar(
                peak.magnitude_dbfs_raw, bounds.scalar.get("magnitude_dbfs")
            )
            peak.phase_radians_norm = self._normalize_scalar(
                peak.phase_radians_raw, bounds.scalar.get("phase_radians")
            )
            peak.phase_deviation_norm = self._normalize_scalar(
                peak.phase_deviation_raw, bounds.scalar.get("phase_deviation")
            )
            peak.spectral_flux_norm = self._normalize_scalar(
                peak.spectral_flux_raw, bounds.scalar.get("spectral_flux")
            )

        frame_model.rms_energy_norm = self._normalize_scalar(
            frame_model.rms_energy_raw, bounds.scalar.get("rms_energy")
        )
        frame_model.peak_amplitude_norm = self._normalize_scalar(
            frame_model.peak_amplitude_raw, bounds.scalar.get("peak_amplitude")
        )
        frame_model.zero_crossing_rate_norm = self._normalize_scalar(
            frame_model.zero_crossing_rate_raw, bounds.scalar.get("zero_crossing_rate")
        )
        frame_model.spectral_centroid_hz_norm = self._normalize_scalar(
            frame_model.spectral_centroid_hz_raw, bounds.scalar.get("spectral_centroid_hz")
        )
        frame_model.global_spectral_flux_norm = self._normalize_scalar(
            frame_model.global_spectral_flux_raw, bounds.scalar.get("global_spectral_flux")
        )
        frame_model.spectral_flatness_norm = self._normalize_scalar(
            frame_model.spectral_flatness_raw, bounds.scalar.get("spectral_flatness")
        )
        frame_model.spectral_rolloff_hz_norm = self._normalize_scalar(
            frame_model.spectral_rolloff_hz_raw, bounds.scalar.get("spectral_rolloff_hz")
        )
        frame_model.spectral_spread_norm = self._normalize_scalar(
            frame_model.spectral_spread_raw, bounds.scalar.get("spectral_spread")
        )
        frame_model.spectral_skewness_norm = self._normalize_scalar(
            frame_model.spectral_skewness_raw, bounds.scalar.get("spectral_skewness")
        )
        frame_model.spectral_kurtosis_norm = self._normalize_scalar(
            frame_model.spectral_kurtosis_raw, bounds.scalar.get("spectral_kurtosis")
        )

        frame_model.mfcc_norm = self._normalize_vector(
            frame_model.mfcc_raw, bounds.vector.get("mfcc")
        )
        frame_model.chromagram_norm = self._normalize_vector(
            frame_model.chromagram_raw, bounds.vector.get("chromagram")
        )

    def _normalize_scalar(self, value: float | None, b: FeatureBounds | None) -> float | None:
        if value is None or b is None:
            return None
        width = b.max_value - b.min_value
        if width <= 0.0:
            return None
        norm = (float(value) - b.min_value) / width
        return float(np.clip(norm, 0.0, 1.0))

    def _normalize_vector(self, values: list[float] | None, b: FeatureBounds | None) -> list[float] | None:
        if values is None or b is None:
            return None
        width = b.max_value - b.min_value
        if width <= 0.0:
            return None
        arr = np.asarray(values, dtype=np.float64)
        norm = (arr - b.min_value) / width
        return [float(v) for v in np.clip(norm, 0.0, 1.0)]

    def _update_state(
        self,
        magnitudes: np.ndarray,
        phase: np.ndarray | None,
        peaks: list[AudioPeak],
    ) -> None:
        self._prev_magnitudes = magnitudes.copy()

        if phase is not None:
            if self._prev_phase is not None:
                self._prev_prev_phase = self._prev_phase.copy()
            self._prev_phase = phase.copy()

        self._prev_envelope = [p.envelope_state or "sustain" for p in peaks]

    def _empty_frame(self, timestamp: float) -> AudioFrame:
        cfg = self.config
        return AudioFrame(
            frame_index=self._frame_index,
            timestamp_seconds=float(timestamp),
            sample_rate=cfg.sample_rate,
            fft_size=cfg.fft_size,
            hop_size=cfg.hop_size,
            frame_size=0,
            peaks=[],
        )

    def _amp_to_dbfs(self, amplitude: float) -> float:
        return float(20.0 * np.log10(max(amplitude, 1e-12)))
