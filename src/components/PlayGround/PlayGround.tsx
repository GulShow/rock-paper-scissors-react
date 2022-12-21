import React, {FC} from 'react';
import './PlayGround.css';
import GameplayChoices from "../GameplayChoices/GameplayChoices";

interface IPlayGround {
    rock: boolean,
    paper:boolean,
    scissors: boolean,
    rockChosen: () => void,
    paperChosen: () => void,
    scissorsChosen: () => void,
    player1Text: string,
    player2Text: string,
    playerOneConnected: boolean,
    playerTwoConnected: boolean,
    waitingMessage: boolean,
    myScore: number,
    enemyScore: number,
    winMessage: string
}

const PlayGround:FC<IPlayGround> = ({rock,
                                        paper,
                                        scissors,
                                        scissorsChosen,
                                        rockChosen,
                                        paperChosen,
                                        player1Text,
                                        player2Text,
                                        playerOneConnected,
                                        playerTwoConnected,
                                        waitingMessage,
                                        myScore,
                                        enemyScore,
                                        winMessage
}
) => {

  return (
    <div className="wrapper">
      <div className="wait-message" id="wait-message">
          {waitingMessage ? "Waiting for another player to join..." : ""}
      </div>

      <div className="connected-players">
        <div className="player">
          <span className="dot" id="player-1" style={{background: playerOneConnected ? 'green': 'white'}}></span> <span id="player-1-tag">{player1Text}</span>
        </div>

        <div className="player">
          <span className="dot" id="player-2" style={{background: playerTwoConnected ? 'green' : 'white'}}></span> <span id="player-2-tag">{player2Text}</span>
        </div>
      </div>

   <GameplayChoices rock={rock}
                    paper={paper}
                    scissors={scissors}
                    rockChosen={rockChosen}
                    paperChosen={paperChosen}
                    scissorsChosen={scissorsChosen}

   />

      <div className="score">
        <span>You: <span id="my-score">{myScore}</span></span>
        <span>Enemy: <span id="enemy-score">{enemyScore}</span></span>
      </div>

      <div className="message-after-choice-selection" id="win-message">
          {winMessage}
      </div>
    </div>
  );
};

export default PlayGround;
