const possibleChoices = document.querySelectorAll('button');
const resultDisplay = document.getElementById('result');
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
let userChoice

const choices = ["rock", "paper", "scissors"];
const winners = [];


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    computerChoice()
}))


function game() {
    playRound();
    getResult();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
    return btn;
}

function computerChoice() {
    computerChoiceDisplay.innerHTML = choices[0];

    return choices[Math.floor(Math.random() * choices.length)] 
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie";
    } else if (
        (playerChoice === "rock" && computerChoice == "scissors") || 
        (playerChoice === "paper" && computerChoice== "rock") || 
        (playerChoice === "scissors" && computerChoice == "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function getResult() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results: ");
    console.log("Player wins: ", playerWins);
    console.log("Computer wins: ", computerWins);
    console.log("Ties: ", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round: ", round);
    console.log("Player Chose: ", playerChoice);
    console.log("Computer Chose: ", computerChoice);
    console.log(winner, "won the Round");
    console.log("---------------------------------");
}

