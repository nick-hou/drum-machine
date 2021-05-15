import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  flipPower,
  flipTrack
} from './drumSlice';
import { Button } from './Button'

export function Drum() {
  // the Drum component is just a wrapper for the keys and buttons. All the logic is handled by the redux state, and all the actions are
  // called from the buttons, so there is no state (or dispatch or selection) necessary for the Drum component.

  const keysUsed = ['Q','W','E','A','S','D','Z','X','C'];

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
        <div className="col">

        </div>
      </div>
    </div>
  );
}
