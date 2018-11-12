const store = require('../store.js')
const gamePlay = require('../game/game-play.js')

const createGameSuccess = function (newGame) {
  $('#game-board').removeClass('hidden')
  store.game = newGame.game
  // gamePlay.emptyGameBoard = newGame.game.cells
  $('#message').addClass('hidden')
}

const makeMoveSuccess = function (newMove) {
  store.game = newMove.game
}

const makeMoveFailure = function () {
  $('#message').html('You messed up, bruh')
}

module.exports = {
  createGameSuccess,
  makeMoveSuccess,
  makeMoveFailure
}
