const store = require('../store.js')

const createGameSuccess = function (newGame) {
  $('#game-board').removeClass('hidden')
  store.game = newGame.game
  console.log(store)
  console.log(newGame.game.id)
}

const makeMoveSuccess = function (newMove) {
  console.log(newMove)
  console.log('a move was made')
}

module.exports = {
  createGameSuccess,
  makeMoveSuccess
}
