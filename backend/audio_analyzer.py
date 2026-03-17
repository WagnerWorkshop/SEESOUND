import librosa
import numpy as np
from typing import Dict, Any, List

class AudioAnalyzer:
    def __init__(self, sample_rate: int = 44100):
        self.sr = sample_rate

    def process_frame(self, y: np.ndarray) -> Dict[str, Any]:
        """
        Process a single frame of audio to extract raw continuous physics.
        Focuses on multidimensional physics mapping:
        - Amplitude (RMS) for brightness
        - Frequency (Spectral Centroid/Roll-off) for size/vertical spacing
        - Stereo Pan for horizontal spacing
        """
        if len(y) == 0:
            return self._empty_frame()

        # Assuming stereo input: shape (2, n_samples). If mono, tile it.
        if y.ndim == 1:
            y_stereo = np.vstack([y, y])
            y_mono = y
        else:
            y_stereo = y
            y_mono = np.mean(y_stereo, axis=0)

        # 1. Amplitude (Brightness mapping)
        rms = float(np.mean(librosa.feature.rms(y=y_mono)))

        # 2. Frequency / Pitch (Size & Vertical Spacing)
        # Using spectral centroid for the overall frequency representation
        try:
            centroid = float(np.mean(librosa.feature.spectral_centroid(y=y_mono, sr=self.sr)))
        except:
            centroid = 0.0

        # Optional: Peak Frequency via FFT for more direct mapping
        fft = np.fft.rfft(y_mono)
        freqs = np.fft.rfftfreq(len(y_mono), 1/self.sr)
        magnitudes = np.abs(fft)
        peak_freq = float(freqs[np.argmax(magnitudes)]) if magnitudes.sum() > 0 else 0.0

        # 3. Stereo Pan (Horizontal Spacing)
        # Calculate energy difference between Left and Right channels
        left_rms = np.mean(librosa.feature.rms(y=y_stereo[0]))
        right_rms = np.mean(librosa.feature.rms(y=y_stereo[1]))
        total_rms = left_rms + right_rms
        # Pan ranges from -1 (Left) to 1 (Right)
        pan = float((right_rms - left_rms) / total_rms) if total_rms > 0 else 0.0

        return {
            "amplitude": rms,
            "centroid": centroid,
            "peak_freq": peak_freq,
            "pan": pan
        }

    def _empty_frame(self) -> Dict[str, Any]:
        return {
            "amplitude": 0.0,
            "centroid": 0.0,
            "peak_freq": 0.0,
            "pan": 0.0
        }
