import React, {FC} from 'react';
import './GameplayChoices.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface IGameplayChoices {
    rock: boolean,
    paper: boolean,
    scissors: boolean,
    rockChosen: () => void,
    paperChosen: () => void,
    scissorsChosen: () => void,
}

const GameplayChoices:FC<IGameplayChoices> = ({rock,
                                                  paper,
                                                  scissors,
                                                  rockChosen,
                                                  paperChosen,
                                                  scissorsChosen
}) => {
  return (
      <div>
      <div className="choices">
        <div className="choice" id="rock"
             style={{color: rock ? 'green' : ' black' }}
             onClick={rockChosen}
        >

            <FontAwesomeIcon icon={['fas', 'hand-rock']} />
        </div>

        <div className="choice" id="paper"
             style={{color: paper ? 'green' : ' black' }}
             onClick={paperChosen}
        >
            <FontAwesomeIcon icon={['fas', 'hand-paper']} />
        </div>

        <div className="choice" id="scissor"
             style={{color: scissors ? 'green' : ' black' }}
             onClick={scissorsChosen}
        >
            <FontAwesomeIcon icon={['fas', 'hand-scissors']} />
        </div>
      </div>
</div>
  );
};

export default GameplayChoices;
