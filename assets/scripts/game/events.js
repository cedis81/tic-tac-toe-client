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

module.exports = {
  onCreateGame
}
