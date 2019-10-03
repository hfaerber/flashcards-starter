const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

  it('should keep track of currentRound', function() {
    const game = new Game();
    game.start();
    // using this it block with no assertion statement to invoke start() method
    // so that I can you console.log to confirm the code I'm building in the
    // game.js file is doing what I need it to do  -- leaving this comment so
    // you can see my thinking on this 
  })
})
