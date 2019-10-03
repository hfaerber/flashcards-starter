const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Game {
  constructor() {}

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let instantiatedCards = [];
    prototypeQuestions.forEach(function(questionInfo){
      const card = new Card(questionInfo.id, questionInfo.question, questionInfo.answers, questionInfo.correctAnswer);
      instantiatedCards.push(card);
    });
    const deck = new Deck(instantiatedCards);
    // console.log(deck);
    console.log(deck.cards.length);
  }

}

module.exports = Game;
