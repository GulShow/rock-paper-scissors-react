import React, {Dispatch, FC, SetStateAction} from 'react';
import './JoinRoomBox.css';

interface IJoinRoomBox {
    toggleJoin: () => void,
    roomId: string,
    setRoomId:Dispatch<SetStateAction<string>>,
    joinRoom: () => void,
    joinRandomRoom: () => void
}

const JoinRoomBox:FC<IJoinRoomBox> = ({toggleJoin, roomId, setRoomId,joinRoom, joinRandomRoom}) => {
  return (
      <div className="join-room-box" id="join-room-box">
        <div className="join-with-id">
          <input type="text" id="join-room-input" value={roomId} onChange={e => setRoomId(e.target.value)}/>
            <button id="join-room-btn" onClick={joinRoom}>Join</button>

            <button id="cancel-join-action" className="cancel-action" onClick={toggleJoin}>Cancel</button>
        </div>

        <button className="join-random" id="join-random" onClick={joinRandomRoom}>Join Random</button>
      </div>
  );
};

export default JoinRoomBox;
