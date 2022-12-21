import React, {FC} from 'react';
import './GameplayChoices.css';

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
          <i className="fas fa-hand-rock"></i>
        </div>

        <div className="choice" id="paper"
             style={{color: paper ? 'green' : ' black' }}
             onClick={paperChosen}
        >
          <i className="fas fa-hand-paper"></i>
        </div>

        <div className="choice" id="scissor"
             style={{color: scissors ? 'green' : ' black' }}
             onClick={scissorsChosen}
        >
          <i className="fas fa-hand-scissors"></i>
        </div>
      </div>
</div>
  );
};

export default GameplayChoices;
