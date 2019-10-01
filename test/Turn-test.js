const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store user guess', function() {
    const turn = new Turn('giant turkey sub');
    expect(turn.guess).to.equal('giant turkey sub');
  });

  it('should store card object', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('giant turkey sub', card);
    // expect(turn.card).to.equal(card);
    // console.log(card);
    // expect(typeof turn.card).to.equal('object');
    expect(turn.card).to.be.an('object');
    expect(turn.card.id).to.equal(1);
    // expect(turn.card.hasOwnProperty('id'));
    expect(turn.card.hasOwnProperty('id')).to.equal(true);
    // hasOwnProperty?   how would i check if it exists?  **Check the docs**
    // could use deep equals to compare obj to obj or array to array
  });

  it('should have a method to return the users guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('giant turkey sub', card);
    const turn1 = new Turn('noodle', card);

    // turn.returnGuess();
    expect(turn.returnGuess()).to.equal('giant turkey sub');

    // turn1.returnGuess();
    expect(turn1.returnGuess()).to.equal('noodle');
  })

  it('should have a method to return card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('giant turkey sub', card);

    // turn.returnCard();
    expect(turn.returnCard()).to.equal(card);
    expect(turn.returnCard()).to.deep.equal(card);
  })

  it('should have a method to evaluate guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('giant turkey sub', card);
    const turn1 = new Turn('object', card);

    // turn.evaluateGuess();
    expect(turn.evaluateGuess()).to.equal(false);

    // turn1.evaluateGuess();
    expect(turn1.evaluateGuess()).to.equal(true);
  })

  it('should have a method to give feedback', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('giant turkey sub', card);
    const turn1 = new Turn('object', card);
    // turn.giveFeedback();
    expect(turn.giveFeedback()).to.equal('incorrect!');

    // turn1.giveFeedback();
    expect(turn1.giveFeedback()).to.equal('correct!');
  })

})
