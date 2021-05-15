import React from 'react'
// The button component is only responsible for dispatching the keypress action. Any logic (including power, volume, side) is handled by the redux state reducers
import { useDispatch } from 'react-redux'
import { pressKey } from './drumSlice'

export function Button(props) {
  const dispatch = useDispatch()

  return (
    <button
      className="drumButton"
      onClick={() => dispatch(pressKey(props.letter))}
    >
      {props.letter}
    </button>
  )
}
