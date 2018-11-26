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

const findGamesCount = function (gameData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(gameData)
  })
}

const makeMove = function (index, playerValue, gameStatus) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify({
      'game': {
        'cell': {
          'index': index,
          'value': playerValue
        },
        'over': gameStatus
      }
    })
  })
}

module.exports = {
  createGame,
  findGamesCount,
  makeMove
}
