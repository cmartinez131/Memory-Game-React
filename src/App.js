import React from 'react';
import { useState } from 'react'

export default function Board() {//{ numChoices, onPlay }
  //todo: create a function to shuffle the board and start new game
  let cardsData = [
    { frontImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/cubs.png?raw=true', backImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/mlb.png?raw=true', isFacedDown: true, isMatched: false},
    { frontImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/cubs.png?raw=true', backImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/mlb.png?raw=true', isFacedDown: true, isMatched: false},
    { frontImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/giants.png?raw=true', backImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/mlb.png?raw=true', isFacedDown: true, isMatched: false},
    { frontImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/giants.png?raw=true', backImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/mlb.png?raw=true', isFacedDown: true, isMatched: false},
    { frontImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/dodgers.png?raw=true', backImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/mlb.png?raw=true', isFacedDown: true, isMatched: false},
    { frontImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/dodgers.png?raw=true', backImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/mlb.png?raw=true', isFacedDown: true, isMatched: false},
    { frontImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/mets.png?raw=true', backImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/mlb.png?raw=true', isFacedDown: true, isMatched: false},
    { frontImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/mets.png?raw=true', backImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/mlb.png?raw=true', isFacedDown: true, isMatched: false},
    { frontImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/yankees.png?raw=true', backImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/mlb.png?raw=true', isFacedDown: true, isMatched: false},
    { frontImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/yankees.png?raw=true', backImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/mlb.png?raw=true', isFacedDown: true, isMatched: false},
    { frontImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/redsox.png?raw=true', backImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/mlb.png?raw=true', isFacedDown: true, isMatched: false},
    { frontImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/redsox.png?raw=true', backImage: 'https://github.com/cmartinez131/Memory-Game-React/blob/main/public/images/mlb.png?raw=true', isFacedDown: true, isMatched: false},
  ]
  let gameFinished = false;
  const [cards, setCards] = useState(cardsData);
  const [choice1, setChoice1] = useState(null)
  const [choice2, setChoice2] = useState(null)
  const [numTurns, setNumTurns] = useState(0);

  function onStartClick() {
    console.log("new game button Pressed");
  }

  function checkMatch(card1,card2) {
    return (card1 === card2)
  }

  function calculateWinner(cards) {
    for (let i = 0; i < cards.length; i++){
      if (cards.isMatched === false) {
        return false; //game is not over yet because we have a card that isn't matched
      }
    }
    return true;
  }

  function handleClick(i) {
    const nextCards = cards.slice();
    const cardClicked = nextCards[i]
    if (choice1){
      if (cardClicked.isFacedDown && cardClicked.isMatched === false){
        setChoice2(cardClicked.frontImage);
        console.log("choice 1 is ", choice1, " and choice 2 is: ", cardClicked.frontImage);
      
        [cardClicked.backImage, cardClicked.frontImage] = [cardClicked.frontImage, cardClicked.backImage];
        cardClicked.isFacedDown = false;
        setCards(nextCards);  //update the cards to reflect picked card
        setNumTurns(numTurns+1);
        
        checkMatch(choice1, cardClicked.frontImage);
        //use setTimeout() here
        setChoice1(null);
        setChoice2(null);
      }
      checkMatch(choice1, cardClicked.frontImage);
    }
    if (!choice1){  //if we dont have choice 1, pick choice1 and set choice 1 only if the card is faced down and not matched
      if (cardClicked.isFacedDown && cardClicked.isMatched === false) {
        setChoice1(cardClicked.frontImage); //set choice 1
        [cardClicked.backImage, cardClicked.frontImage] = [cardClicked.frontImage, cardClicked.backImage] //flip card
        cardClicked.isFacedDown = false;  //change card to be faced up
        setCards(nextCards);  //update the cards to reflect picked card
      }
    }
  }
  return (
    <>
    <div className="title">Match the Team Logos</div>
    <div className="start-button">
      <button onClick={onStartClick}>Start New Game</button>
    </div>
    <div className="board-row">
      <Card frontImage={cards[0].frontImage} backImage={cards[0].backImage} isFacedDown={cards[0].isFacedDown} onCardClick={() => handleClick(0)} />
      <Card frontImage={cards[1].frontImage} backImage={cards[1].backImage} isFacedDown={cards[1].isFacedDown} onCardClick={() => handleClick(1)} />
      <Card frontImage={cards[2].frontImage} backImage={cards[2].backImage} isFacedDown={cards[2].isFacedDown} onCardClick={() => handleClick(2)} />
      <Card frontImage={cards[3].frontImage} backImage={cards[3].backImage} isFacedDown={cards[3].isFacedDown} onCardClick={() => handleClick(3)} />
    </div>
    <div className="board-row">
      <Card frontImage={cards[4].frontImage} backImage={cards[4].backImage} isFacedDown={cards[4].isFacedDown} onCardClick={() => handleClick(4)} />
      <Card frontImage={cards[5].frontImage} backImage={cards[5].backImage} isFacedDown={cards[5].isFacedDown} onCardClick={() => handleClick(5)} />
      <Card frontImage={cards[6].frontImage} backImage={cards[6].backImage} isFacedDown={cards[6].isFacedDown} onCardClick={() => handleClick(6)} />
      <Card frontImage={cards[7].frontImage} backImage={cards[7].backImage} isFacedDown={cards[7].isFacedDown} onCardClick={() => handleClick(7)} />
    </div>
    <div className="board-row">
      <Card frontImage={cards[8].frontImage} backImage={cards[8].backImage} isFacedDown={cards[8].isFacedDown} onCardClick={() => handleClick(8)} />
      <Card frontImage={cards[9].frontImage} backImage={cards[9].backImage} isFacedDown={cards[9].isFacedDown} onCardClick={() => handleClick(9)} />
      <Card frontImage={cards[10].frontImage} backImage={cards[10].backImage} isFacedDown={cards[10].isFacedDown} onCardClick={() => handleClick(10)} />
      <Card frontImage={cards[11].frontImage} backImage={cards[11].backImage} isFacedDown={cards[11].isFacedDown} onCardClick={() => handleClick(11)} />
    </div>
    <div className="status">Number of turns: {numTurns} </div>
    </>
  );
}

function Card({ frontImage, backImage, isFacedDown, onCardClick }) {
  let imageSource = ""
  imageSource = backImage
  return (
    <img 
      className="card" 
      src={imageSource} 
      alt="mlb logo"
      onClick={onCardClick}
    />
  )
}



