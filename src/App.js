import { useState } from 'react'

export default function Board() {//{ numChoices, onPlay }
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

  const [numTurns, setNumTurns] = useState(0);

  function onStartClick() {
    console.log("new game button Pressed")
  }

  function handleClick(i) {
    const nextCards = cards.slice();
    const cardClicked = nextCards[i]
//only does function if we have no cards picked yet, and the card picked is faced down and not matched
    if (choice1){
      if (cardClicked.isFacedDown && cardClicked.isMatched === false){
        [cardClicked.backImage, cardClicked.frontImage] = [cardClicked.frontImage, cardClicked.backImage]
        cardClicked.isFacedDown = false
        setChoice2(cardClicked.id)
        console.log(choice1, cardClicked.id)
        setCards(nextCards);  //update the cards to reflect picked card
        setNumTurns(numTurns+1);
        if (checkMatch(choice1,choice2)) {
          status = "Match!"
        }

        //use setTimeout() here
        setChoice1(null);
        setChoice2(null);
      }
    }
    if (!choice1){  //if we dont have choice 1, pick choice1 and set choice 1 only if the card is faced down and not matched
      console.log(cardClicked.id)

      if (cardClicked.isFacedDown && cardClicked.isMatched === false) {
        [cardClicked.backImage, cardClicked.frontImage] = [cardClicked.frontImage, cardClicked.backImage]
        cardClicked.isFacedDown = false
        setChoice1(cardClicked.id)
        setCards(nextCards);  //update the cards to reflect picked card
        if (checkMatch(choice1,choice2)) {
          status = "Match!"
        }
      }
    }
  }

  const match = checkMatch(cards);
  let status = "Game Started";
  if (match) {
    status = "Match!"
  }
  return (
    <>
    <div className="title">Memory Game</div>
    <button className="start-button">Start New Game onClick{onStartClick}</button>
    <div className="board-row">
      <Card value={cards[0].backImage} onCardClick={() => handleClick(0)} />
      <Card value={cards[1].backImage} onCardClick={() => handleClick(1)} />
      <Card value={cards[2].backImage} onCardClick={() => handleClick(2)} />
      <Card value={cards[3].backImage} onCardClick={() => handleClick(3)} />
    </div>
    <div className="board-row">
      <Card value={cards[4].backImage} onCardClick={() => handleClick(4)} />
      <Card value={cards[5].backImage} onCardClick={() => handleClick(5)} />
      <Card value={cards[6].backImage} onCardClick={() => handleClick(6)} />
      <Card value={cards[7].backImage} onCardClick={() => handleClick(7)} />
    </div>
    <div className="board-row">
      <Card value={cards[8].backImage} onCardClick={() => handleClick(8)} />
      <Card value={cards[9].backImage} onCardClick={() => handleClick(9)} />
      <Card value={cards[10].backImage} onCardClick={() => handleClick(10)} />
      <Card value={cards[11].backImage} onCardClick={() => handleClick(11)} />
    </div>
    <div className="status">Number of turns: {numTurns} </div>
    </>
  );
}

function Card({ value , onCardClick , choice1, choice2}) {
  return <button className="card" onClick={onCardClick}>{value}</button>
}

function calculateWinner(cards) {
  for (let i = 0; i < cards.length; i++){
    if (cards.isMatched === false) {
      return false; //game is not over yet because we have a card that isn't matched
    }
  }
  return true;
}

function checkMatch(card1,card2) {
  return (card1 === card2)
}