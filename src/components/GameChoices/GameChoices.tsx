import React, {FC} from 'react';
import './GameChoices.css';

interface IGameChoices {
  toggle: () => void,
    toggleJoin: () => void
 }

const GameChoices:FC<IGameChoices> = ({toggle, toggleJoin}) => {
  return (
      <div className="gameplay-choices" id="gameplay-choices">
        <button id="open-create-room-box" onClick={toggle}>Create Room</button>
        <button id="open-join-room-box" onClick={toggleJoin}>Join Room</button>
      </div>
  );
};

export default GameChoices;
