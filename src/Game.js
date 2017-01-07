import React from 'react';

function getTotal(cards){
  var counter = 0;
  cards.forEach((card) => {
    counter += card.value;
  })
  return counter;
}

const Game = (props) => {
  const {userCards, aiCards, playRound, winner, triggerExecuteRound, triggerResetGame} = props;
  var userTotal = getTotal(userCards);
  var aiTotal = getTotal(aiCards);
  if (winner) {
    return <div>
      <p className='winner'>{winner}</p>
      <p className='computer-total'>computer score: {aiTotal}</p>
      <p className='user-total'>your score: {userTotal}</p>
      <button className='reset' onClick={triggerResetGame}>play again</button>
    </div>
  } else {
    return <div>
      <p className='user-total'>your total: {userTotal}</p>
      <button className='play' onClick={triggerExecuteRound}>hit me</button>
    </div>
  }
}

export default Game;
