const emptyGameBoard = ['', '', '', '', '', 'x', '', '', '']
const xBoard = []
const oBoard = []
// const winRow = [0, 1, 2]
// const winCol = [0, 3, 6]
// const winDiag1 = [0, 4, 8]
// const winDiag2 = [2, 4, 6]
// once counter hits 5, check for victory. once counter hits 9, end game
let overCounter = 5

const checkX = function (clickRequest) {
  // check for square availability
  if (!emptyGameBoard[clickRequest]) {
    // square is available, mark it unavailable and give square index to user X
    emptyGameBoard[clickRequest] = 'x'
    xBoard.push(clickRequest)
    // add to game counter
    overCounter += 1
    console.log('this square is empty')
    // TODO: notify user O it is their turn
    console.log('user O should now go')
  } else {
    // square is unavailable. TODO: notify the user
    console.log('this square has been taken')
  }
  if (overCounter > 4) {
    // TODO: create logic to determine victory
    console.log('check for victory')
  }
}

checkX(4)
console.log(emptyGameBoard)
console.log(xBoard)
console.log(overCounter)
