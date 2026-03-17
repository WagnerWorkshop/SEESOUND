export function calculateLinearSpacing(frameData, state) {
    // Horizontal (x) = timestamp / progressive time 
    // Vertical (y) = frequency

    const speed = 0.1;
    if (state.linearX === undefined) state.linearX = -15;

    state.linearX += speed;
    if (state.linearX > 15) {
        state.linearX = -15; // Wrap around for now, can be adjusted to scroll camera instead
    }

    const x = state.linearX;
    const y = (frameData.peak_freq / 2000.0) * 10 - 5;
    return { x, y, z: 0 };
}
