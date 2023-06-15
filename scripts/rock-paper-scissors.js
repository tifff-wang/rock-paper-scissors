//a default operator. If the score is null due to remove item from local storage, use defaut score value to start.

let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  losses: 0,
  tie: 0,
}

updateScoreElement()

function playGame(playerMove) {
  const computerMove = pickComputerMove()
  console.log(score)

  let result = ''

  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lose.'
    } else if (computerMove === 'Paper') {
      result = 'Congrats! you win.'
    } else if (computerMove === 'Scissors') {
      result = 'Tie'
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'Congrats! you win.'
    } else if (computerMove === 'Paper') {
      result = 'Tie'
    } else if (computerMove === 'Scissors') {
      result = 'You lose.'
    }
  } else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie'
    } else if (computerMove === 'Paper') {
      result = 'You lose.'
    } else if (computerMove === 'Scissors') {
      result = 'Congrats! you win.'
    }
  }

  if (result === 'Congrats! you win.') {
    score.win += 1
  } else if (result === 'You lose.') {
    score.losses += 1
  } else if (result === 'Tie') {
    score.tie += 1
  }

  localStorage.setItem('score', JSON.stringify(score))

  updateScoreElement()

  document.querySelector('.js-result').innerHTML = result

  document.querySelector('.js-moves').innerHTML = `You
  <img src="images/${playerMove}.png" class="emoji-icon">
  <img src="images/${computerMove}.png" class="emoji-icon">
  computer`
}

function updateScoreElement() {
  document.querySelector(
    '.js-score'
  ).innerHTML = `wins = ${score.win}, losses = ${score.losses}, ties = ${score.tie}`
}

function pickComputerMove() {
  const randomNumber = Math.random()
  let computerMove = ''

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock'
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper'
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = 'Scissors'
  }

  return computerMove
}
