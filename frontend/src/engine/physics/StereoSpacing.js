export function calculateStereoSpacing(frameData, state) {
    // Horizontal (x) = pan (-1 to 1)
    // Vertical (y) = frequency
    const x = frameData.pan * 10;
    const y = (frameData.peak_freq / 2000.0) * 10 - 5;
    return { x, y, z: 0 };
}
