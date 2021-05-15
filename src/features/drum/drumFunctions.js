export const flashButton = (keyPressed) => {
  console.log(keyPressed)
}

export const playSound = (fileName, volume) => {
  console.log(fileName)
}

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

export const keyLookup = (keyPressed, track) => {
  return (track === 'A')
    ? keys[keyPressed][0]
    : keys[keyPressed][1]
}
