/*
  Rock Paper Scissors SOLUTION 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    let rpsChoices = ['Rock', 'Paper', 'Scissors']
    let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
    return computerChoice
  }
  
  // ** getResult compares playerChoice & computerChoice and returns the score accordingly **
  // human wins - getResult('Rock', 'Scissors') 👉 1
  // human loses - getResult('Scissors', 'Rock') 👉 -1
  // human draws - getResult('Rock', 'Rock') 👉 0
  function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost
    
    let score;
  
    // All situations where human draws, set `score` to 0
    if (playerChoice === computerChoice) {
      score = 0
  
    
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
      score = 1
  
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      score = 1
  
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
      score = 1
  
    // Otherwise human loses (aka set score to -1)
    } else {
      score = -1
    }
  
    // return score
    return score
  }
  
  // ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**

  function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
        let result  = document.getElementById('result')
        switch (score) {
            case -1:
                result.inneText = 'You Lose!'
                break;
            case 0:
                result.innerText = 'You Win!'
                break;
            case 1:
                result.innerText = 'You Win!'
                break;
        }
        let payerScore = document.getElementById('player-score')
        let hands = document.getElementById('hands')
        playerScore.innerText = `${Number(playerScore.innerText) + score}`
            hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
  }

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)
    showResult(score, playerChoice.value, computerChoice)
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    // 
}