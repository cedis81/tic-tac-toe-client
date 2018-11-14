const store = require('../store.js')
const gamePlay = require('../game/game-play.js')

const createGameSuccess = function (newGame) {
  $('#game-board').removeClass('hidden')
  $('#message').addClass('success-message')
  store.game = newGame.game
  store.player = 'x'
  store.playerX = []
  store.playerO = []
  $('#message').addClass('hidden')
  $('[data-cell-index="0"]').html('')
  $('[data-cell-index="1"]').html('')
  $('[data-cell-index="2"]').html('')
  $('[data-cell-index="3"]').html('')
  $('[data-cell-index="4"]').html('')
  $('[data-cell-index="5"]').html('')
  $('[data-cell-index="6"]').html('')
  $('[data-cell-index="7"]').html('')
  $('[data-cell-index="8"]').html('')
}

const makeMoveSuccess = function (newMove) {
  $('#message').addClass('hidden')
  $('#message').html('')
  store.game = newMove.game
  gamePlay.createPlayerArray(store.boardIndex, store.player)
  $('[data-cell-index="' + store.boardIndex + '"]').html(store.player)
  gamePlay.checkForWin(store.playerX, store.playerO)
  gamePlay.switchPlayer()
}

const makeMoveFailure = function () {
  $('#message').removeClass('hidden')
  $('#message').addClass('error-message')
  $('#message').html('You messed up, bruh')
}

module.exports = {
  createGameSuccess,
  makeMoveSuccess,
  makeMoveFailure
}
