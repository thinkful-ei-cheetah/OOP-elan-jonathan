'use strict';

class Card {
  constructor(face, suit, value) {
    this.face = face;
    this.suit = suit;
    this.value = value;
  }
  flipCard() {
    this.face = !this.face;
  }
  describeCard() {
    console.log(`Your card is a ${this.value} of ${this.suit}.`);
  }
}

class Stack {
  constructor() {
    this.deck = [];
  }
}

class Draw extends Stack {
  
}

class Play extends Stack {

}

class Discard extends Stack {

}

class Game {
  constructor() {
    this.activeDeck = new Play();
    this.discardDeck = new Discard();
    this.drawDeck = new Draw();
  }

  createDeck() {
    let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
    let values = ['Ace', 'King'];
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < suits.length; j++) {
        let newCard = new Card(true, suits[j], values[i]);
        this.drawDeck.deck.push(newCard);   
      }
    }  
  }

  playRound() {
    if (this.activeDeck.deck.length >0)
    {
        let discard = this.activeDeck.deck.shift();
        this.discardDeck.deck.push(discard);
    }
    let playCard = this.drawDeck.deck.shift();
    this.activeDeck.deck.push(playCard);
  }
}

const newGame = new Game();

newGame.createDeck();
newGame.playRound();
newGame.playRound();
console.log(newGame)

