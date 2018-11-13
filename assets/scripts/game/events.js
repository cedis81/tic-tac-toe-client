const api = require('./api.js')
const ui = require('./ui.js')
const gamePlay = require('./game-play.js')
const store = require('../store.js')

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.failure)
}

const onMakeMove = function (event) {
  event.preventDefault()
  const index = event.target.dataset.cellIndex
  const playerValue = store.player
  const gameStatus = store.game.over
  store.boardIndex = index
  // gamePlay.checkSquare(index, playerValue)
  if (store.game.cells[index] === '' && store.game.over === false) {
    gamePlay.boardIndex = index
    api.makeMove(index, playerValue, gameStatus)
      .then(ui.makeMoveSuccess)
      .catch(ui.makeMovefailure)
  } else {
    ui.makeMoveFailure()
  }
}

module.exports = {
  onCreateGame,
  onMakeMove
}
