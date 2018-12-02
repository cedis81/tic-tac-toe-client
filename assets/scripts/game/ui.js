const store = require('../store.js')
const gamePlay = require('../game/game-play.js')

const createGameSuccess = function (newGame) {
  $('#game-board').removeClass('hidden')
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  store.game = newGame.game
  store.player = 'x'
  store.playerX = []
  store.playerO = []
  $('#message').html('Player x, it is your turn. Do not do something stupid')
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

const findGamesCountSuccess = function (data) {
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  $('#message').html(store.user.email + ', you\'ve played ' + data.games.length + ' games.')
}

const makeMoveSuccess = function (newMove) {
  $('#message').removeClass('error-message')
  $('#message').addClass('success-message')
  store.game = newMove.game
  gamePlay.createPlayerArray(store.boardIndex, store.player)
  $('[data-cell-index="' + store.boardIndex + '"]').html(store.player)
  gamePlay.checkForWin(store.playerX, store.playerO)
  gamePlay.switchPlayer()
  if (store.game.over === false) {
    $('#message').html('Player ' + store.player + ', it is your turn.')
  }
}

const makeMoveFailure = function () {
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  $('#message').html('Something went wrong, please try again.')
}

module.exports = {
  createGameSuccess,
  findGamesCountSuccess,
  makeMoveSuccess,
  makeMoveFailure
}
