const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

  // it('should have a start method', function() {
  //   const game = new Game();
  //   game.start();
  //   expect(game.start()).to.be.a('function');  ERRORS
  // })
  it('should make a deck with 30 cards', function() {
    const game = new Game();
    game.start();

    // expect(deck.cards.length).to.equal(30);
  })



})
