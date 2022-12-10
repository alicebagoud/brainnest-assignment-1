
// Complete logic of game inside this function
const game = () => {
	let playerScore = 0;
	let computerScore = 0;


// Function to
const playGame = () => {
	const rockBtn = document.querySelector('.rock');
	const paperBtn = document.querySelector('.paper');
	const scissorsBtn = document.querySelector('.scissors');
	const playerOptions = [rockBtn,paperBtn,scissorsBtn];
	const computerOptions = ['rock','paper','scissors'];
	
// Function to start playing game
playerOptions.forEach(option => {
	option.addEventListener('click',function(){

	const choiceNumber = Math.floor(Math.random()*3);
	const computerChoice = computerOptions[choiceNumber];

// Function to check who wins
	winner(this.innerText,computerChoice);

// Calling gameOver function after 10 moves
	if(playerScore === 5 || computerScore === 5){
	gameOver(playerOptions);
			}
		})
	})
}

// Function to decide winner
const winner = (player,computer) => {
const result = document.querySelector('.result');
const playerScoreBoard = document.querySelector('.p-count');
const computerScoreBoard = document.querySelector('.c-count');
player = player.toLowerCase();
computer = computer.toLowerCase();

if (player === computer) {
	result.textContent = 'Tie'
} else if ((player === "rock" && computer == "scissors") || 
	(player === "paper" && computer == "rock") || 
	(player === "scissors" && computer == "paper")) {
	result.textContent = 'Player Won';
	playerScore++;
	playerScoreBoard.textContent = playerScore;
	return "Player";
} else {
	result.textContent = 'Computer Won';
	computerScore++;
	computerScoreBoard.textContent = computerScore;
	return "Computer";
	}
}

// Function to run when game is over
const gameOver = () => {

	const result = document.querySelector('.result');
	const reloadBtn = document.querySelector('.reload');

	if (playerScore > computerScore) {
		result.innerText = 'You Won The Game'
		result.style.color = '#308D46';
	}
	else if (playerScore < computerScore) {
		result.innerText = 'You Lost The Game';
		result.style.color = 'red';
	}
	else {
		result.innerText = 'Tie';
		result.style.color = 'grey'
	}
	reloadBtn.innerText = 'Restart';
	reloadBtn.style.display = 'flex';
	reloadBtn.addEventListener('click',() => {
		window.location.reload();
	})
}


// Calling playGame function inside game
playGame();
	
}

// Calling the game function
game();
