import React from 'react';
import './ControlPanel.css';

export default function ControlPanel({ params, setParams }) {
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setParams(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : parseFloat(value) || value
        }));
    };

    return (
        <div className="control-panel">
            <h2>SEESOUND v1.0 Core</h2>

            <div className="control-group">
                <label>Spacing Mode:</label>
                <select name="spacingMode" value={params.spacingMode} onChange={handleChange}>
                    <option value="stereo">Stereo (Frequency + Pan)</option>
                    <option value="linear">Linear (Frequency + Timestamp)</option>
                </select>
            </div>

            <div className="control-group">
                <label>
                    <input
                        type="checkbox"
                        name="momentaryPainting"
                        checked={params.momentaryPainting}
                        onChange={handleChange}
                    />
                    Momentary Painting (Fade over time)
                </label>
            </div>

            <div className="control-group">
                <label>Default Particle Size</label>
                <input
                    type="range" name="defaultSize"
                    min="0.1" max="10.0" step="0.1"
                    value={params.defaultSize} onChange={handleChange}
                />
            </div>

            <div className="control-group">
                <label>Amplitude to Brightness</label>
                <input
                    type="range" name="ampToBrightness"
                    min="0.1" max="5.0" step="0.1"
                    value={params.ampToBrightness} onChange={handleChange}
                />
            </div>

            <div className="control-group">
                <label>Texture Smoothness</label>
                <input
                    type="range" name="textureSmoothness"
                    min="0.0" max="1.0" step="0.05"
                    value={params.textureSmoothness} onChange={handleChange}
                />
            </div>
        </div>
    );
}
