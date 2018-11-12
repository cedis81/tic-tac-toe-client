const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const gamePlay = require('./game-play.js')

const onCreateGame = function (event) {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.createGame(gameData)
    .then(ui.createGameSuccess)
    .catch(ui.failure)
}

const onMakeMove = function (event) {
  event.preventDefault()
  const index = event.target.dataset.cellIndex
  const playerValue = gamePlay.player
  const gameStatus = gamePlay.over
  $(event.target).trigger('reset')
  api.makeMove(index, playerValue, gameStatus)
    .then(ui.makeMoveSuccess)
    .catch(ui.makeMovefailure)
}

module.exports = {
  onCreateGame,
  onMakeMove
}
