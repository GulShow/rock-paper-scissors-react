import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import StartScreen from "./components/StartScreen/StartScreen";
import PlayGround from "./components/PlayGround/PlayGround";

// import {io} from "./server";
import {io} from "socket.io-client";



const SERVER_URL = 'http://localhost:3001/';



const socket = io(SERVER_URL)




function App() {

    const [choices, setChoices] = useState(true);
    const [createRoomBox, setCreateRoomBox] = useState(false);
    const [roomId, setRoomId] = useState('');
    const [errorState, setErrorState] = useState(false);
    const [joinRoomBox, setJoinRoomBox] = useState(false);
    const [canChoose, setCanChoose] = useState(false);
    const [playerOneConnected, setPlayerOneConnected] = useState(false);
    const [playerTwoConnected, setPlayerTwoConnected] = useState(false);
    const [playerId, setPlayerId] = useState(0);
    const [myChoice, setMyChoice] = useState('');
    const [rock, setRock] = useState(false);
    const [paper, setPaper] = useState(false);
    const [scissors, setScissors] = useState(false);
    const [player1Text, setPlayer1Text] = useState('');
    const [player2Text, setPlayer2Text] = useState('');
    const [errorMessage, setErrorMessage]= useState('');
    const [startScreen, setStartScreen] = useState(true);
    const [playground, setPlayground] = useState(false);
    const [waitingMessage, setWaitingMessage] = useState(false);
    const [myScorePoints, setMyScorePoints] = useState(0);
    const [enemyScorePoints, setEnemyScorePoints] = useState(0);
    const [winMessage, setWinMessage] = useState('');

// const connect = () => {
//     io(SERVER_URL)
// }



    //Components functions

    const toggle = () => {
        setChoices(prev => !prev);
        setCreateRoomBox(prev => !prev)
    }


    const createRoom = () => {
        setErrorState(false);
        socket.emit("create-room", roomId);
    }

    const toggleJoin = () => {
        setChoices(prev => !prev);
        setJoinRoomBox(prev => !prev)
    }

    const joinRoom = () => {
        setErrorState(false);
        socket.emit("join-room", roomId);
    }

    const joinRandomRoom = () => {
        setErrorState(false);
        socket.emit("join-random");
    }

    const rockChosen = () => {
        if(canChoose && myChoice === "" && playerOneConnected && playerTwoConnected){
            setMyChoice("rock");
            choose(myChoice);
            socket.emit("make-move", {playerId, myChoice, roomId});
        }
    }

    const paperChosen = () => {
        if(canChoose && myChoice === "" && playerOneConnected && playerTwoConnected){
            setMyChoice("paper");
            choose(myChoice);
            socket.emit("make-move", {playerId, myChoice, roomId});
        }
    }

    const scissorsChosen = () => {
        if(canChoose && myChoice === "" && playerOneConnected && playerTwoConnected){
            setMyChoice("scissors");
            choose(myChoice);
            socket.emit("make-move", {playerId, myChoice, roomId});
        }
    }

    //Socket

    socket.on("display-error", (err:string) => {
        setErrorMessage(err);
    })

    socket.on("room-created", (id:string) => {
        setPlayerId(1);
        setRoomId(id);
        setPlayerTag(1);
        setStartScreen(false);
        setPlayground(true);
    })

    socket.on("room-joined", (id:string) => {
        setPlayerId(2);
        setRoomId(id);

        setPlayerOneConnected(true);
        playerJoinTheGame(1)
        setPlayerTag(2);
        setWaitMessage(false);

        setStartScreen(false);
        setPlayground(true);
    })

    socket.on("player-1-connected", () => {
        playerJoinTheGame(1);
        setPlayerOneConnected(true);
    })

    socket.on("player-2-connected", () => {
        playerJoinTheGame(2)
        setPlayerTwoConnected(true)
        setCanChoose(true)
        setWaitMessage(false);
    });

    socket.on("player-1-disconnected", () => {
        reset()
    })

    socket.on("player-2-disconnected", () => {
        setCanChoose(false);
        setPlayerTwoConnected(false);
        setWaitMessage(true);
        setEnemyScorePoints(0);
        setMyScorePoints(0);
    })

    socket.on("draw", (message:string) => {
        setWinningMessage(message);
    })


    socket.on("player-1-wins", ({myChoice, enemyChoice}) => {
        if(playerId === 1){
            let message = "You choose " + myChoice + " and the enemy choose " + enemyChoice + " . So you win!";
            setWinningMessage(message);
            setMyScorePoints(prev => prev++);
        }else{
            let message = "You choose " + myChoice + " and the enemy choose " + enemyChoice + " . So you lose!";
            setWinningMessage(message);
            setEnemyScorePoints(prev => prev++);
        }
    })

    // @ts-ignore
    socket.on("player-2-wins", ({myChoice, enemyChoice}) => {
        if(playerId === 2){
            let message = "You choose " + myChoice + " and the enemy choose " + enemyChoice + " . So you win!";
            setWinningMessage(message);
            setMyScorePoints(prev => prev++);
        }else{
            let message = "You choose " + myChoice + " and the enemy choose " + enemyChoice + " . So you lose!";
            setWinningMessage(message);
            setEnemyScorePoints(prev => prev++);
        }
    })

    //Functions

    function setPlayerTag(playerId:number){
        if(playerId === 1){
            setPlayer1Text("You (Player 1)");
            setPlayer2Text("Enemy (Player 2)");
        }else{
            setPlayer1Text("Enemy (Player 2)");
            setPlayer2Text("You (Player 1)");
        }
    }

    function playerJoinTheGame(playerId:number){
        if(playerId === 1){
            setPlayerOneConnected(true);
        }else{
            setPlayerTwoConnected(true);
        }
    }

    function setWaitMessage(display:boolean){
        if(display){
            setWaitingMessage(true);
        }else{
            setWaitingMessage(false);
        }
    }

    function reset(){
        setCanChoose(false);
        setPlayerOneConnected(false);
        setPlayerTwoConnected(false);
        setStartScreen(true);
        setChoices(true);
        setPlayground(false);
        setJoinRoomBox(false);
        setCreateRoomBox(false)

        setMyScorePoints(0);
        setEnemyScorePoints(0);
        setWaitMessage(true);
    }

    function choose(choice:string){
        if(choice === "rock"){
            setRock(true);
        }else if(choice === "paper"){
            setPaper(true)
        }else{
            setScissors(true);
        }

        setCanChoose(false)
    }

    function removeChoice(choice: string){
        if(choice === "rock"){
            setRock(false);
        }else if(choice === "paper"){
            setPaper(false);
        }else{
            setScissors(false);
        }

        setCanChoose(true);
        setMyChoice('');
    }

    function setWinningMessage(message:string){
        setWinMessage(message)

        setTimeout(() => {
            removeChoice(myChoice)
            setWinMessage('');
        }, 2500)
    }

    return (

        <div className="App">
            { startScreen && <StartScreen toggle={toggle}
                         choices={choices}
                         createRoomBox={createRoomBox}
                         roomId = {roomId}
                         setRoomId = {setRoomId}
                         createRoom={createRoom}
                         toggleJoin={toggleJoin}
                         joinRoomBox={joinRoomBox}
                         errorState={errorState}
                         joinRoom={joinRoom}
                         joinRandomRoom={joinRandomRoom}
                         errorMessage={errorMessage}
            />}
            {playground && <PlayGround rock={rock}
                                       paper={paper}
                                       scissors={scissors}
                                       rockChosen={rockChosen}
                                       paperChosen={paperChosen}
                                       scissorsChosen={scissorsChosen}
                                       player1Text={player1Text}
                                       player2Text={player2Text}
                                       playerOneConnected={playerOneConnected}
                                       playerTwoConnected={playerTwoConnected}
                                       waitingMessage={waitingMessage}
                                       myScore={myScorePoints}
                                       enemyScore={enemyScorePoints}
                                       winMessage={winMessage}

            />}
            {/*<button onClick={connect}>Connect</button>*/}
        </div>
    );
}

export default App;
