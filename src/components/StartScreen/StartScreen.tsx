import React, {Dispatch, FC, SetStateAction, useContext} from 'react';
import CreateRoomBox from "../CreateRoomBox/CreateRoomBox";
import GameChoices from "../GameChoices/GameChoices";
import JoinRoomBox from "../JoinRoomBox/JoinRoomBox";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import {AppContext} from "../../App";
// import {AppContext} from "../../App";


interface IStartScreen{
    toggle: () => void,
    choices: boolean,
    createRoomBox: boolean,
    roomId: string,
    setRoomId: Dispatch<SetStateAction<string>>,
    createRoom: () => void,
    toggleJoin: () => void,
    joinRoomBox: boolean,
    errorState: boolean,
    joinRoom: () => void,
    joinRandomRoom: () => void,
    errorMessage: string,
    children: React.ReactNode
}



const StartScreen:FC<IStartScreen> = ({toggle,
                                          choices,
                                          createRoomBox,
                                          roomId,
                                          setRoomId,
                                          createRoom,
                                          toggleJoin,
                                          joinRoomBox,
                                          errorState,
                                          joinRoom,
                                          joinRandomRoom,
                                          errorMessage,
    children
}) => {
    // const obj = useContext<IStartScreen>(AppContext);

    // interface obj {
    //     toggleForm: () => void,
    //     playGround: boolean
    // }
    // const {toggleForm} = useApp();
    // const obj:obj = useContext(AppContext)


    return (
        <div id="start-screen">
            <h1>Rock Paper Scissors</h1>

            {choices && <GameChoices toggle={toggle} toggleJoin={toggleJoin}/>}

            {createRoomBox && children}

            {/*{createRoomBox && <CreateRoomBox toggle={toggle}*/}
            {/*                                 roomId = {roomId}*/}
            {/*                                 setRoomId={setRoomId}*/}
            {/*                                 createRoom={createRoom}*/}
            {/*/>}*/}

            {joinRoomBox && <JoinRoomBox toggleJoin={toggleJoin}
                                         roomId={roomId}
                                         setRoomId={setRoomId}
                                         joinRoom={joinRoom}
                                         joinRandomRoom={joinRandomRoom}

            />}


            {errorState && <ErrorMessage errorMessage={errorMessage}/>}
        </div>
    );
}

export default StartScreen;
