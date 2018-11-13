const store = require('../store.js')

// const checkSquare = function (index, player) {
//   if (store.game.cells[index] === '') {
//     store.game.cells[index] = player
//   }
// }

const createPlayerArray = function (index, player) {
  // create player arrays to check for win condition
  if (player === 'x') {
    return store.playerX.push(index)
  } else {
    return store.playerO.push(index)
  }
}

const checkForWin = function (arrayX, arrayO) {
  if (arrayX.includes('0') && arrayX.includes('1') && arrayX.includes('2')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayX.includes('3') && arrayX.includes('4') && arrayX.includes('5')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayX.includes('6') && arrayX.includes('7') && arrayX.includes('8')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayX.includes('0') && arrayX.includes('3') && arrayX.includes('6')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayX.includes('1') && arrayX.includes('4') && arrayX.includes('7')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayX.includes('2') && arrayX.includes('5') && arrayX.includes('8')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayX.includes('0') && arrayX.includes('4') && arrayX.includes('8')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayX.includes('2') && arrayX.includes('4') && arrayX.includes('6')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayO.includes('0') && arrayO.includes('1') && arrayO.includes('2')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayO.includes('3') && arrayO.includes('4') && arrayO.includes('5')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayO.includes('6') && arrayO.includes('7') && arrayO.includes('8')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayO.includes('0') && arrayO.includes('3') && arrayO.includes('6')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayO.includes('1') && arrayO.includes('4') && arrayO.includes('7')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayO.includes('2') && arrayO.includes('5') && arrayO.includes('8')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayO.includes('0') && arrayO.includes('4') && arrayO.includes('8')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayO.includes('2') && arrayO.includes('4') && arrayO.includes('6')) {
    $('#message').removeClass('hidden')
    $('#message').html('win')
    store.game.over = true
  } else if (arrayO.length + arrayX.length === 9) {
    $('#message').removeClass('hidden')
    $('#message').html('tie')
    store.game.over = true
  }
}

const switchPlayer = function () {
  const newPlayerValue = (store.player === 'x') ? 'o' : 'x'
  store.player = newPlayerValue
}

module.exports = {
  // checkSquare,
  createPlayerArray,
  switchPlayer,
  checkForWin
}
