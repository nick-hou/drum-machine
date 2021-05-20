import React, { useEffect } from 'react'
// The button component is only responsible for dispatching the keypress action. Any logic (including power, volume, side) is handled by the redux state reducers
import { useDispatch, useSelector } from 'react-redux'
import { pressKey } from './drumSlice'

export function Button(props) {
  const dispatch = useDispatch()
  const currTrack = useSelector(state => state.drum.track)

  // Adding the event listener here simplifies our logic a bit, since we can
  // check directly in the button component if the keypress matches a button
  useEffect(() => {
    const handleKeyPress = e => {
      if(e.key.toUpperCase() === props.letter) {
        dispatch(pressKey(props.letter))
      }
    }
    document.addEventListener("keypress", handleKeyPress)
  }, [])

  return (
    <button
      className="drumButton"
      onClick={() => dispatch(pressKey(props.letter))}
    >
      {props.letter}
    </button>
  )
}
