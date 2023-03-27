import { useState } from 'react'

function Card({ value , onCardClick , choice1, choice2}) {
  return <button className="card" onClick={onCardClick}>{value}</button>
}

function Board() {
  //todo: create a function to shuffle the board and start new game
  const cardsData = [
    { id: 1, frontImage: 'card1', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 1, frontImage: 'card1', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 2, frontImage: 'card2', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 2, frontImage: 'card2', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 3, frontImage: 'card3', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 3, frontImage: 'card3', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 4, frontImage: 'card4', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 4, frontImage: 'card4', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 5, frontImage: 'card5', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 5, frontImage: 'card5', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 6, frontImage: 'card6', backImage: "--", isFacedDown: true, isMatched: false},
    { id: 6, frontImage: 'card6', backImage: "--", isFacedDown: true, isMatched: false},
  ]
  const [cards, setCards] = useState(cardsData);
  const [choice1, setChoice1] = useState(null)
  const [choice2, setChoice2] = useState(null)

  function handleClick(i) {
    const nextCards = cards.slice();
    const cardClicked = nextCards[i]
    
    //two cases: 1. we are picking the second card
    //           2. we are picking the first card
//only does function if we have no cards picked yet, and the card picked is faced down and not matched
    if (choice1){
      if (cardClicked.isFacedDown && cardClicked.isMatched === false){
        [cardClicked.backImage, cardClicked.frontImage] = [cardClicked.frontImage, cardClicked.backImage]
        cardClicked.isFacedDown = false
        setChoice2(cardClicked.id)
        console.log(choice1, cardClicked.id)
      }
    }
    if (!choice1){  //if we dont have choice 1, pick choice1 and set choice 1 only if the card is faced down and not matched
      console.log(cardClicked.id)
      if (cardClicked.isFacedDown && cardClicked.isMatched === false) {
        [cardClicked.backImage, cardClicked.frontImage] = [cardClicked.frontImage, cardClicked.backImage]
        cardClicked.isFacedDown = false
        setChoice1(cardClicked.id)
      }
    }
    setCards(nextCards);  //update the cards to reflect picked card
    //TODO
    //toggle handleTurn which will take choice1 and choice 2 and manipulate the cards array
          
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
      <Card value={cards[8].backImage} onCardClick={() => handleClick(8)} choice1={choice1} choice2={choice2} />
      <Card value={cards[9].backImage} onCardClick={() => handleClick(9)} choice1={choice1} choice2={choice2} />
      <Card value={cards[10].backImage} onCardClick={() => handleClick(10)} choice1={choice1} choice2={choice2} />
      <Card value={cards[11].backImage} onCardClick={() => handleClick(11)} choice1={choice1} choice2={choice2} />
    </div>
    </>
  );
}

export default function Game() {
  return (
    <div className='game'>
      <div className='game-board'>
        <Board />
      </div>
      <div className='game-info'>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}


function calculateWinner(cards) {
  for (let i = 0; i < cards.length; i++){
    if (cards.isMatched === false) {
      return false; //game is not over yet because we have a card that isn't matched
    }
  }
  return true;
}

