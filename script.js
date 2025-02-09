// script.js
function checkSignal() {
    // Mock signal strength for demo purposes
    const signalStrength = Math.floor(Math.random() * 101); // Random value between 0 and 100
    
    const signal = document.getElementById('signal');
    signal.style.width = signalStrength + '%';
    
    if (signalStrength > 75) {
        signal.style.backgroundColor = '#4caf50'; // Green for strong signal
    } else if (signalStrength > 50) {
        signal.style.backgroundColor = '#ffeb3b'; // Yellow for moderate signal
    } else if (signalStrength > 25) {
        signal.style.backgroundColor = '#ff9800'; // Orange for weak signal
    } else {
        signal.style.backgroundColor = '#f44336'; // Red for very weak signal
    }
}
