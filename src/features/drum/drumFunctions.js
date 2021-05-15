export const flashButton = (keyPressed) => {
  console.log(keyPressed)
}

export const playSound = (fileName, volume) => {
  console.log(fileName)
}

const keys = {
  'Q': ['hi-hat 1', 'hi-hat 2'],
  'W': ['hi-hat 1', 'hi-hat 2'],
  'E': ['hi-hat 1', 'hi-hat 2'],
  'A': ['hi-hat 1', 'hi-hat 2'],
  'S': ['hi-hat 1', 'hi-hat 2'],
  'D': ['hi-hat 1', 'hi-hat 2'],
  'Z': ['hi-hat 1', 'hi-hat 2'],
  'X': ['hi-hat 1', 'hi-hat 2'],
  'C': ['hi-hat 1', 'hi-hat 2'],
}

export const keyLookup = (keyPressed, track) => {
  return (track === 'A')
    ? keys[keyPressed][0]
    : keys[keyPressed][1]
}
