const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

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
  const gameData = {
    'game': {
      'cell': {
        'index': event.target.dataset.cellIndex,
        'value': 'x'
      },
      'over': false
    }
  }
  $(event.target).trigger('reset')
  api.makeMove(gameData)
    .then(ui.makeMoveSuccess)
    .catch(ui.failure)
  console.log(gameData)
}

module.exports = {
  onCreateGame,
  onMakeMove
}
