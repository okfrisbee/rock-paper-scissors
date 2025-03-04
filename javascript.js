function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        result.textContent = "Tie!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = "You lose! Paper beats rock.";
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = "You win! Rock beats scissors.";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = "You win! Paper beats rock.";
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        result.textContent = "Tie!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent = "You lose! Scissors beats paper.";
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent = "You lose! Rock beats scissors.";
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "You win! Scissors beats paper.";
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        result.textContent = "Tie!";
    }
    count++;
    if (humanScore === 5) {
        result.textContent = "You are the winner of the game!";
    } else if (computerScore === 5) {
        result.textContent = "The computer is the winner of the game!";
    }
}

let humanScore = 0;
let computerScore = 0;
let count = 0;

const body = document.querySelector("body");

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);

const container = document.createElement("div");
const wins = document.createElement("p");
const losses = document.createElement("p");
const ties = document.createElement("p");
const result = document.createElement("p");
container.textContent = "Total Score:";
wins.textContent = "Wins: 0";
losses.textContent = "Losses: 0";
ties.textContent = "Ties: 0";

container.appendChild(wins);
container.appendChild(losses);
container.appendChild(ties);
container.appendChild(result)

body.appendChild(container);

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
    wins.textContent = "Wins: " + humanScore;
    losses.textContent = "Losses: " + computerScore;
    ties.textContent = "Ties: " + (count - humanScore - computerScore);
});
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
    wins.textContent = "Wins: " + humanScore;
    losses.textContent = "Losses: " + computerScore;
    ties.textContent = "Ties: " + (count - humanScore - computerScore);
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
    wins.textContent = "Wins: " + humanScore;
    losses.textContent = "Losses: " + computerScore;
    ties.textContent = "Ties: " + (count - humanScore - computerScore);
});