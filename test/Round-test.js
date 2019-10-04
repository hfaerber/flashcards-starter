const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    expect(Round).to.be.a('function');
  });

  it('should be an instantiation of Round', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  });

  it('should take a deck as param but only use its cards array', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  })

  it('should have currentCard which is the first card in the deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.currentCard).to.deep.equal(card1);
    expect(round.currentCard.id).to.equal(1);
  })

  it('should have method to return the currect card being played', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(card1);
    expect(round.currentCard.id).to.equal(1);
  })

  it('should have a counter of how many turns have been taken', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.turns).to.equal(0);
  })

  it('should keep track of incorrect guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.incorrectGuesses).to.deep.equal([]);
  })

  it('should have a takeTurn method which is a function', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.takeTurn).to.be.a('function');
  })

  // skipping test below bc no longer returning 'turn' in method I'm testing
  it.skip('should instantiate new Turn when takeTurn() invoked', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(typeof round.takeTurn('beef')).to.equal('object');
    expect(round.takeTurn('beef')).to.be.an.instanceof(Turn);
  })

  // skipping test below bc no longer returning 'turn' in method I'm testing
  it.skip('should use guess as first arg of new Turn inst', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('beef');
    expect(round.takeTurn('beef').guess).to.equal('beef');
  })

  // skipping test below bc no longer returning 'turn' in method I'm testing
  it.skip('should use turn.currentCard as 2nd arg of Turn inst', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.takeTurn('beef').card).to.deep.equal({
      id: 1,
      question:
      'What allows you to define a set of related information using key-value pairs?',
      answers: [ 'object', 'array', 'function' ],
      correctAnswer: 'object' });
  })

  it('should update turns counter when takeTurn method invoked', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('beef');
    expect(round.turns).to.equal(1);
    round.takeTurn('beef');
    round.takeTurn('beef');
    expect(round.turns).to.equal(3);
  })

  it('should update current card to next card if takeTurn invoked', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.currentCard).to.deep.equal(card1);
    expect(round.currentCard.id).to.equal(1);
    round.takeTurn('beef');
    expect(round.currentCard).to.deep.equal(card2);
    expect(round.currentCard.id).to.equal(2);
    round.takeTurn('nine');
    expect(round.currentCard).to.deep.equal(card3);
    expect(round.currentCard.id).to.equal(3);
  })

  it('should return incorrect! when takeTurn with incorrect guess', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.takeTurn('beef')).to.equal('incorrect!');
  })

  it('should return correct! when takeTurn with correct guess', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.takeTurn('object')).to.equal('correct!');
  })

  it('should store the id in an array of incorrect guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn('object');
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn('beef');
    expect(round.incorrectGuesses).to.deep.equal([2]);
    round.takeTurn('nine');
    expect(round.incorrectGuesses).to.deep.equal([2, 3]);
  })

  it('should calculate percent of correct guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('object');
    round.takeTurn('beef');
    expect(round.calculatePercentCorrect()).to.equal(50);
    round.takeTurn('wild Ben');
    expect(round.calculatePercentCorrect()).to.equal(33);
  })

  it('should log a message at end of game', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('object');
    round.takeTurn('beef');
    round.takeTurn('wild Ben');
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!')
  })
})
