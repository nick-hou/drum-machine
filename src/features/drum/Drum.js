import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  flipPower,
  flipTrack
} from './drumSlice';
import { Button } from './Button'


export const Drum = () => {
  const dispatch = useDispatch();
  // const keysUsed = ['Q','W','E','A','S','D','Z','X','C'];
  const powerStatus = useSelector(state => state.drum.power)
  const lastSoundPlayed = useSelector(state => state.drum.text)
  const trackStatus = useSelector(state => state.drum.track)

  return (
    <div className="drumbox">
      <div className="row boxRow">
        <div className="col">
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


        <div className="col align-self-center display-col">
          <button
            className="powerButton"
            onClick={() => dispatch(flipPower())}
          >
            Power: {powerStatus ? 'ON' : 'OFF'}
          </button>

          <br /><br /><br /><br />

          <p className="soundText">
            {lastSoundPlayed}
          </p>

          <br/><br /><br />

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
