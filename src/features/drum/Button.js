import React, { useEffect, useState } from 'react'
// The button component is only responsible for dispatching the keypress action. Any logic (including power, volume, side) is handled by the redux state reducers
import { useDispatch } from 'react-redux'
import { pressKey } from './drumSlice'


export function Button(props) {
  const dispatch = useDispatch()

  // Use a local state here to change classes for the flash animation
  const [btnClass, setBtnClass] = useState('btnIdle')

  const flashButton = () => {
    setBtnClass('btnClicked');
    setTimeout(
      () => setBtnClass('btnIdle'),
      200
    )
  }

  // Adding the event listener here simplifies our logic a bit, since we can
  // check directly in the button component if the keypress matches a button
  useEffect(() => {
    const handleKeyPress = e => {
      if(e.key.toUpperCase() === props.letter) {
        flashButton()
        dispatch(pressKey(props.letter))
      }
    }
    document.addEventListener("keypress", handleKeyPress)
  })

  return (
    <button
      className={'drumButton ' + btnClass}
      onClick={() => {
        flashButton()
        dispatch(pressKey(props.letter))
      }}
    >
      {props.letter}
    </button>
  )
}
