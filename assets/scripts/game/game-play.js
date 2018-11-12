const store = require('../store.js')
const ui = require('../auth/ui.js')

const emptyGameBoard = []
let player = 'x'
let over = false
// const playerX = []
// const playerY = []

const playMove = function () {
  // check for square availability. if gameboard length is even, player is X
  if (!emptyGameBoard[3]) {
    // square is available, mark it unavailable and give square index to user X
    emptyGameBoard[3] = player
  } else {
    console.log('you cant do this')
  }

  // need to check for victory

  if (emptyGameBoard.length % 2 === 0) {
    player = 'x'
    console.log(player)
    return player
  } else {
    player = 'y'
    console.log(player)
    return player
  }
}

module.exports = {
  emptyGameBoard,
  playMove,
  player,
  over
}
