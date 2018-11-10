const config = require('../config.js')
const store = require('../store.js')

const createGame = function (gameData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(gameData)
  })
}

const makeMove = function (moveData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(moveData)
  })
}

module.exports = {
  createGame,
  makeMove
}
