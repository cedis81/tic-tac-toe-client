const createGameSuccess = function (newGame) {
  console.log(newGame)
  console.log('new game worked, kinda! I think')
  $('#game-board').removeClass('hidden')
}

module.exports = {
  createGameSuccess
}
