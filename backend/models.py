"""Pure audio-domain models for SEESOUND backend analysis."""

from __future__ import annotations

from typing import Literal

from pydantic import BaseModel, Field


EnvelopeState = Literal["attack", "decay", "sustain", "release"]


class FeatureBounds(BaseModel):
    """User-defined min/max reference values for normalization."""

    min_value: float
    max_value: float


class NormalizationBounds(BaseModel):
    """Normalization boundaries keyed by feature name."""

    scalar: dict[str, FeatureBounds] = Field(default_factory=dict)
    vector: dict[str, FeatureBounds] = Field(default_factory=dict)


class AudioAnalysisConfig(BaseModel):
    """Granular calculation toggles and DSP settings for optimization."""

    sample_rate: int = 44100
    fft_size: int = 2048
    hop_size: int = 512
    rolloff_percent: float = Field(default=0.85, gt=0.0, lt=1.0)
    n_mfcc: int = Field(default=13, ge=1, le=40)

    calc_fft: bool = True
    calc_magnitude: bool = True
    calc_magnitude_dbfs: bool = True
    calc_phase: bool = True
    calc_phase_deviation: bool = True
    calc_local_spectral_flux: bool = True
    calc_envelope_state: bool = True

    calc_rms_energy: bool = True
    calc_peak_amplitude: bool = True
    calc_zero_crossing_rate: bool = True
    calc_spectral_centroid: bool = True
    calc_global_spectral_flux: bool = True
    calc_spectral_flatness: bool = True
    calc_spectral_rolloff: bool = True
    calc_spectral_spread: bool = True
    calc_spectral_skewness: bool = True
    calc_spectral_kurtosis: bool = True
    calc_mfcc: bool = True
    calc_chromagram: bool = True

    normalize_features: bool = True
    normalization_bounds: NormalizationBounds = Field(default_factory=NormalizationBounds)


class AudioPeak(BaseModel):
    """Per-bin spectral feature set for one analysis frame."""

    bin_index: int
    center_frequency_hz_raw: float
    center_frequency_hz_norm: float | None = None

    magnitude_linear_raw: float
    magnitude_linear_norm: float | None = None

    magnitude_dbfs_raw: float
    magnitude_dbfs_norm: float | None = None

    phase_radians_raw: float | None = None
    phase_radians_norm: float | None = None

    phase_deviation_raw: float | None = None
    phase_deviation_norm: float | None = None

    spectral_flux_raw: float | None = None
    spectral_flux_norm: float | None = None

    envelope_state: EnvelopeState | None = None


class AudioFrame(BaseModel):
    """Global frame-level analysis and per-bin peak data."""

    frame_index: int
    timestamp_seconds: float
    sample_rate: int
    fft_size: int
    hop_size: int
    frame_size: int

    peaks: list[AudioPeak] = Field(default_factory=list)

    rms_energy_raw: float | None = None
    rms_energy_norm: float | None = None

    peak_amplitude_raw: float | None = None
    peak_amplitude_norm: float | None = None

    zero_crossing_rate_raw: float | None = None
    zero_crossing_rate_norm: float | None = None

    spectral_centroid_hz_raw: float | None = None
    spectral_centroid_hz_norm: float | None = None

    global_spectral_flux_raw: float | None = None
    global_spectral_flux_norm: float | None = None

    spectral_flatness_raw: float | None = None
    spectral_flatness_norm: float | None = None

    spectral_rolloff_hz_raw: float | None = None
    spectral_rolloff_hz_norm: float | None = None

    spectral_spread_raw: float | None = None
    spectral_spread_norm: float | None = None

    spectral_skewness_raw: float | None = None
    spectral_skewness_norm: float | None = None

    spectral_kurtosis_raw: float | None = None
    spectral_kurtosis_norm: float | None = None

    mfcc_raw: list[float] | None = None
    mfcc_norm: list[float] | None = None

    chromagram_raw: list[float] | None = None
    chromagram_norm: list[float] | None = None
