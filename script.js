/*
  Rock Paper Scissors 🚀🔥
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
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(math.random()*choices.lenght);
    return choices[randomIndex];
}
// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0

function getResult(playerChoice,  computerChoice) {
    // return the result of score based in if you won, dew, or lost
    let score:
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
        score = 0;
    } else if (playerChoice === 'scissors' && comouterChoice === 'paper') {
        score = 1;
    }else if (playerChoice === 'paper' && computerChoice === 'rock'){
        score = 1;
    } else {
        score -= 1;
    }
    return score;
}
