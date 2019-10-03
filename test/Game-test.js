const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

  // it('should have a start method', function() {
  //   const game = new Game();
  //   game.start();
  //   expect(game.start()).to.be.a('function');  ERRORS
  // })
  it('should keep track of currentRound', function() {
    const game = new Game();

    // expect(this.currentRound).to.equal(undefined);

    game.start();

    // expect(this.currentRound).to.equal();

    // expect(deck.cards.length).to.equal(30);
  })



})
