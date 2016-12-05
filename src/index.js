if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const main = () => {
  // document.querySelector('h1').textContent += ''
  let player = 'X'
  const cells = document.querySelectorAll('td')
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
      if (cells[i].textContent === '') {
        cells[i].textContent = player
        if (player === 'X') {
          player = 'O'
        } else {
          player = 'X'
        }
      }
    })
  }
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 6, 3],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const checkForWinner = () => {
  for (let i = 0; i < winningCombos.length; i++) {
    const winningCombo = winningCombos[i]

    let moves = winningCombo.map((position) => {
      return cells[position].textContent
    })
    if (moves.every((move) => {
      return move === player
    })) {
      return true
    }
  }
  return false
}
const reset = () => {
  const cells = document.querySelectorAll('td')
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = ''
  }
}
document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
