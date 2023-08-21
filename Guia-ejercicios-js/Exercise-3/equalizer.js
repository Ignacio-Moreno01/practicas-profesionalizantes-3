const equalizer = {
    bands: [
        { frequency: 32, gain: 0 },
        { frequency: 64, gain: 0 },
        { frequency: 125, gain: 0 },
        { frequency: 250, gain: 0 },
        { frequency: 500, gain: 0 },
        { frequency: 1000, gain: 0 },
        { frequency: 2000, gain: 0 },
        { frequency: 4000, gain: 0 },
        { frequency: 8000, gain: 0 },
        { frequency: 16000, gain: 0 }
    ],
    preset: 'Flat',
    active: true,
    volume: 42
};

console.log("Frecuencia del primer rango: " + equalizer.bands[1].frequency);
console.log("Preset actual: " + equalizer.preset);
console.log("Estado (activo): " + equalizer.active);
console.log("Volumen del ecualizador: " + equalizer.volume);