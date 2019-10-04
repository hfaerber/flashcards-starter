const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

  it('should keep track of currentRound', function() {
    const game = new Game();
    game.start();
  })
})
