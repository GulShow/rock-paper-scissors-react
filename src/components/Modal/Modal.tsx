import React, {Dispatch, FC, SetStateAction} from 'react';
import './Modal.css';
import {key} from "../../App";

interface IModal {
  active: boolean,
  setActive: Dispatch<SetStateAction<boolean>>,
    userName: string,
    setUserName: Dispatch<SetStateAction<string>>
}

const Modal:FC<IModal> = ({active, setActive, userName, setUserName}) => {
    return (
    <div className={active ? "active modal" : "modal"} >
<div className={active ? "active modal__content" : "modal__content"} onClick={e => e.stopPropagation()}>
    <h3>Type your nickname:</h3>
        <input type="text" id="modal__input" value={localStorage.getItem(key) || '' } onChange={e => setUserName(e.target.value)}/>

    <button onClick={() => setActive(false)}>Ok</button>
</div>
    </div>
  );
};

export default Modal;
