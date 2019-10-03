const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
  }


  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let pileOfCards = [];
    prototypeQuestions.forEach(function(questionInfo){
      const card = new Card(questionInfo.id, questionInfo.question, questionInfo.answers, questionInfo.correctAnswer);
      pileOfCards.push(card);
    });
    const deck = new Deck(pileOfCards);
    const round = new Round(deck);
    // console.log('ROUNDROUNDROUND', round);
    this.currentRound = round;
    // console.log('CURRENTROUND', this.currentRound);
    this.printMessage(deck, round);
    this.printQuestion(round);

  }

}

module.exports = Game;
