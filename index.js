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
  }
  createDeck() {
    let drawDeck = new Draw();
    let suits = [];
    let values = [];
    for (let i = 0; i < values.length; i++) {
      for (let i = 0; i < suits.length; i++) {
        let newCard = new Card(true, 'hearts', 'queen');
        drawDeck.deck.push(newCard);
        
      }
    }
    
  }
  playRound() {
    let discard = this.activeDeck.deck.shift();
    this.discardDeck.deck.push(discard);
    let playCard = this.drawDeck.deck.shift();
    this.activeDeck.push(playCard);
  }
}
