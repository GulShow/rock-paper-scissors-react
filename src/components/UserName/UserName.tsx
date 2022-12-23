import React, {FC} from 'react';
import './UserName.css';
import {key} from "../../App";

interface IUserName{

}



const UserName:FC<IUserName> = () => {
  const userName = localStorage.getItem(key || '')
  return (
    <div className="wrapper">
      Your nickname is:
      {userName}
    </div>
  );
};

export default UserName;
