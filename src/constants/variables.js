export const tabHiddenRoutes = [
    'Estimator Stack',
    'Renovation Stack',
    'Architecture Stack',
    'Construction Stack',
    'Auth',
]

// audio file options
export const options = {
    sampleRate: 16000, // default 44100
    channels: 1, // 1 or 2, default 1
    bitsPerSample: 16, // 8 or 16, default 16
    audioSource: 6, // android only (see below)
    wavFile: 'audio.wav', // default 'audio.wav'
}

// regex to validate pakistani phone numbers
export const pakPhoneNoRegex = new RegExp('^(3)([0-4]{1})([0-9]{8})$/gm', '')
