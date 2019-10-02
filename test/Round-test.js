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

  it('should take a deck as a parameter but only use its cards array', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    // console.log(deck);
    // console.log(round.deck);
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  })

  it('should have a currentCard which is the first card in the deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    // console.log(round.deck);
    expect(round.currentCard).to.deep.equal(card1);
    expect(round.currentCard.id).to.equal(1);
  })

  it('should have a method to return the currect card being played', function() {
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

    // round.takeTurn('guess');
    expect(round.takeTurn).to.be.a('function');
  })

  it.skip('should instantiate a new Turn when takeTurn method invoked', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    // round.takeTurn('beef');
    expect(typeof round.takeTurn('beef')).to.equal('object');
    expect(round.takeTurn('beef')).to.be.an.instanceof(Turn);

   })
//
// if this is instantiated it should have access to its methods so i could write a
// test to prove that the methods are working.

   it.skip('should use guess as first arg of new Turn inst', function() {
     const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
     const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
     const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
     const deck = new Deck([card1, card2, card3]);
     const round = new Round(deck);

     round.takeTurn('beef');
     expect(round.takeTurn('beef').guess).to.equal('beef');
   })

   it.skip('should use turn.currentCard as second arg of new Turn inst', function() {
     const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
     const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
     const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
     const deck = new Deck([card1, card2, card3]);
     const round = new Round(deck);

     // round.takeTurn('beef');
     expect(round.takeTurn('beef').card).to.deep.equal({
        id: 1,
        question:
         'What allows you to define a set of related information using key-value pairs?',
        answers: [ 'object', 'array', 'function' ],
        correctAnswer: 'object' });
        // this test started failing when i started changing the currentCard
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

  it('should update current card to next card when takeTurn invoked', function() {
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

  it('should return incorrect! when takeTurn is invoked w incorrect guess', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.takeTurn('beef')).to.equal('incorrect!');
  })

  it('should return correct! when takeTurn is invoked w correct guess', function() {
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



// Guess is evaluated/recorded.
// Incorrect guesses will be stored (via the id)
// in an array of incorrectGuesses

// will return either correct or incorrect
// wtf does it do with the Turn? - doesnt need to save, just compare, increment counter and move on
// evaluate guesses
// give giveFeedback
// store id of incorrect guesses




})
