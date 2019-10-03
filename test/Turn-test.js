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
    expect(turn.card).to.be.an('object');
    expect(turn.card.id).to.equal(1);
    expect(turn.card.hasOwnProperty('id')).to.equal(true);
  });

  it('should have a method to return the users guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('giant turkey sub', card);
    const turn1 = new Turn('noodle', card);
    expect(turn.returnGuess()).to.equal('giant turkey sub');
    expect(turn1.returnGuess()).to.equal('noodle');
  })

  it('should have a method to return card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('giant turkey sub', card);
    expect(turn.returnCard()).to.equal(card);
    expect(turn.returnCard()).to.deep.equal(card);
  })

  it('should have a method to evaluate guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('giant turkey sub', card);
    const turn1 = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn1.evaluateGuess()).to.equal(true);
  })

  it('should have a method to give feedback', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('giant turkey sub', card);
    const turn1 = new Turn('object', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
    expect(turn1.giveFeedback()).to.equal('correct!');
  })
})
