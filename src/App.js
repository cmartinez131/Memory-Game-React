import { useState } from 'react'

function Card({ value , onCardClick , choice1, choice2}) {
  return <button className="card" onClick={onCardClick}>{value}</button>
}

export default function Board() {
  const cardsData = [
    { id: 1, frontImage: 'card1', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 1, frontImage: 'card1', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 2, frontImage: 'card2', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 2, frontImage: 'card2', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 3, frontImage: 'card3', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 3, frontImage: 'card3', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 4, frontImage: 'card4', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 4, frontImage: 'card4', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 5, frontImage: 'card3', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 5, frontImage: 'card3', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 6, frontImage: 'card4', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 6, frontImage: 'card4', backImage: "--", isFacedDown: true, isMatched: false},
  ]
  const [cards, setCards] = useState(cardsData);
  const [choice1, setChoice1] = useState(false)
  const [choice2, setChoice2] = useState(false)

  
  
  function handleClick(i) {
    
  }

  return (
    <>
    <div className="title">Memory Game</div>
    <div className="status">game status: </div>
    <div className="board-row">
      <Card value={cards[0].backImage} onCardClick={() => handleClick(0)} choice1={choice1} choice2={choice2} />
      <Card value={cards[1].backImage} onCardClick={() => handleClick(1)} choice1={choice1} choice2={choice2} />
      <Card value={cards[2].backImage} onCardClick={() => handleClick(2)} choice1={choice1} choice2={choice2} />
      <Card value={cards[3].backImage} onCardClick={() => handleClick(3)} choice1={choice1} choice2={choice2} />
    </div>
    <div className="board-row">
      <Card value={cards[4].backImage} onCardClick={() => handleClick(4)} choice1={choice1} choice2={choice2} />
      <Card value={cards[5].backImage} onCardClick={() => handleClick(5)} choice1={choice1} choice2={choice2} />
      <Card value={cards[6].backImage} onCardClick={() => handleClick(6)} choice1={choice1} choice2={choice2} />
      <Card value={cards[7].backImage} onCardClick={() => handleClick(7)} choice1={choice1} choice2={choice2} />
    </div>
    <div className="board-row">
      <Card value={cards[8].backImage} onCardClick={() => handleClick(8)} />
      <Card value={cards[9].backImage} onCardClick={() => handleClick(9)} />
      <Card value={cards[10].backImage} onCardClick={() => handleClick(10)} />
      <Card value={cards[11].backImage} onCardClick={() => handleClick(11)} />
    </div>
    </>
  );
}


function calculateWinner(cards) {
  for (let i = 0; i < cards.length; i++){
    if (cards.isMatched == false) {
      return false; //game is not over yet because we have a card that isn't matched
    }
  }
  return true;
}

