const result = document.getElementById('result')
const hands = document.getElementById('hands')
const playerScore = document.getElementById('player-score')
const totalScore = { 'PlayerScore': 0, 'ComputerScore': 0, 'HiddenScore': 0, 'HiddenScore1': 0 }

function getComputerChoice() {
  const choiceArray = ['Rock', 'Paper', 'Scissors']
  let ComputerChoiceRandom = Math.floor(Math.random() * 3)
  return choiceArray[ComputerChoiceRandom]
}

function getResult(playerChoice, computerChoice) {

  let scoreValue = 0
  if (playerChoice == computerChoice) {
    scoreValue = 0
  } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    scoreValue = 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    scoreValue = 1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    scoreValue = 1
  } else {
    scoreValue = -1
  }
  return scoreValue
}

function showResult(score, playerChoice, computerChoice) {
  if (score == -1) {
    result.innerText = 'You Lose!'
  } else if (score == 0) {
    result.innerText = 'Draw!'
  } else {
    result.innerText = 'You Win!'
  }
  hands.innerText = `🤦‍♂️ ${playerChoice}, 🤖 ${computerChoice}`
  playerScore.innerText = `Your score after all games: ${totalScore['PlayerScore']}, Computer score after all games: ${totalScore['ComputerScore']},
  Your total wins: ${totalScore['HiddenScore']}, Computer total wins: ${totalScore['HiddenScore1']}`
}

function onClickRPS(playerChoice) {

  let computerChoiceValue = getComputerChoice()
  let score = getResult(playerChoice, computerChoiceValue)

  if (score == 1) {
    totalScore['PlayerScore'] += 1
    totalScore['HiddenScore'] += 1
    totalScore['ComputerScore'] -= 1
  } else if (score == -1) {
    totalScore['PlayerScore'] -= 1
    totalScore['ComputerScore'] += 1
    totalScore['HiddenScore1'] += 1
  }
  showResult(score, playerChoice, computerChoiceValue)
}


function playGame() {

  const button = document.querySelectorAll('.rpsButton')
  const button1 = document.getElementById('endGameButton')

  button.forEach(square => {
    square.onclick = () => {
      onClickRPS(square.value)
    }
  })
  button1.onclick = () => {
    endGame()
  }
}

function endGame() {
  result.innerText = ''
  hands.innerText = ''
  playerScore.innerText = ''
  totalScore['PlayerScore'] = 0
  totalScore['ComputerScore'] = 0
  totalScore['HiddenScore'] = 0
  totalScore['HiddenScore1'] = 0
}

playGame()