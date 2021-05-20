const keys = {
  'Q': ['Heater 1', 'Chord 1'],
  'W': ['Heater 2', 'Chord 2'],
  'E': ['Heater 3', 'Chord 3'],
  'A': ['Heater 4', 'Shaker'],
  'S': ['Clap', 'Open HH'],
  'D': ['Open HH', 'Closed HH'],
  'Z': ["Kick n' Hat", 'Punchy Kick'],
  'X': ['Kick', 'Side Stick'],
  'C': ['Closed HH', 'Snare'],
}

export const keyLookup = (keyPressed, track) => keys[keyPressed][track === 'A' ? 0 : 1]

const sounds = {
  'Q': [
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3')
  ],
  'W': [
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3')
  ],
  'E':  [
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3')
  ],
  'A':  [
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3')
  ],
  'S':  [
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3')
  ],
  'D':  [
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3')
  ],
  'Z':  [
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3')
  ],
  'X': [
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3')
  ],
  'C':  [
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3')
  ]
}

export const playSound = (keyPressed, track, newVolume) => {
  var snd = sounds[keyPressed][track === 'A' ? 0 : 1]
  snd.volume = newVolume/100
  snd.currentTime = 0
  snd.play()
}
