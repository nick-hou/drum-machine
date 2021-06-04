import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  flipPower,
  flipTrack,
  setVolume
} from './drumSlice';
import { Button } from './Button'


export const Drum = () => {
  const dispatch = useDispatch();
  // const keysUsed = ['Q','W','E','A','S','D','Z','X','C'];
  const powerStatus = useSelector(state => state.drum.power)
  const lastAction = useSelector(state => state.drum.text)
  const trackStatus = useSelector(state => state.drum.track)

  return (
    <div className="drumbox">
      <div className="row boxRow">
        <div className="col-8">
          <div className="row btnRow justify-content-around">
            <Button id="Qbtn" letter="Q" />
            <Button id="Wbtn" letter="W" />
            <Button id="Ebtn" letter="E" />
          </div>
          <div className="row btnRow justify-content-around">
            <Button id="Abtn" letter="A" />
            <Button id="Sbtn" letter="S" />
            <Button id="Dbtn" letter="D" />
          </div>
          <div className="row btnRow justify-content-around">
            <Button id="Zbtn" letter="Z" />
            <Button id="Xbtn" letter="X" />
            <Button id="Cbtn" letter="C" />
          </div>
        </div>


        <div className="col-4 align-self-center display-col">
          <button
            className="powerButton"
            onClick={() => dispatch(flipPower())}
          >
            Power: {powerStatus ? 'ON' : 'OFF'}
          </button>

          <br /><br />

          <p className="soundText">
            {lastAction}
          </p>

          <br />

          <div className="slidecontainer">
            <input
              className="slider"
              type="range"
              min="1"
              max="100"
              defaultValue="100"
              id="myRange"
              onInput={e => dispatch(setVolume(e.target.value))}
              onChange={e => dispatch(setVolume(e.target.value))}
            />
          </div>

          <br />

          <button
            className="trackButton"
            onClick={() => dispatch(flipTrack())}
          >
            Track: {trackStatus}
          </button>
        </div>
      </div>
    </div>
  );
}
