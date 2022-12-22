import React, {Dispatch, FC, SetStateAction} from 'react';
import './CreateRoomBox.css';

interface ICreateRoomBox {
    toggle: () => void,
    roomId: string,
    setRoomId:Dispatch<SetStateAction<string>>,
    createRoom: () => void
}

const CreateRoomBox:FC<ICreateRoomBox> = ({toggle, roomId, setRoomId, createRoom}) => {
  return (
      <div className="create-room-box" id="create-room-box">
        <input type="text" id="room-id" value={roomId} onChange={e => setRoomId(e.target.value)}/>
        <button id="create-room-btn" onClick={createRoom}>Create</button>

        <button id="cancel-create-action" className="cancel-action" onClick={toggle}>Cancel</button>
      </div>
  );
};

export default CreateRoomBox;
