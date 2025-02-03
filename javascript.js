// Create a function called getComputerChoice
    // It has to randomly return one of the following strings: rock, paper, or scissors
        // You might want to use Math.random which returns a number that's greater than or equal to 1
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 100) + 1;

    if (computerChoice <= 33) {
        return "rock";
    } else if (computerChoice >= 66) {
        return "scissors";
    } else {
        return "paper";
    }
}

// Global variables
let humanScore = 0;
let computerScore = 0;

// Event Listener Buttons Area
    // If user picks rock:
    document.querySelector("#rock").addEventListener("click", ()=>{
        playRound("rock");
    });
    // If user picks paper:
    document.querySelector("#paper").addEventListener("click", ()=>{
        playRound("paper");
    });
    // If user picks scissors:
    document.querySelector("#scissors").addEventListener("click", ()=>{
        playRound("scissors");
    });

// Create function called playRound
    // Make two arguments called humanChoice and computerChoice that logs the choices
    // Compare the results
    // Print winner for the round through console.log (ex. You lose! Paper breats rock.)
    // Increment the scores based on round winner
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    // Note to self: lean more about js mapping later.
    const winPairs = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (humanChoice === computerChoice) {
        document.querySelector("#results").textContent = "It's a tie!";
    } else if (winPairs[humanChoice] === computerChoice) {
        document.querySelector("#results").textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        document.querySelector("#results").textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    document.querySelector("#score").textContent = `Scoreboard: User ${humanScore} - Computer ${computerScore}.`;

    if (humanScore == 5) {
        document.querySelector("#winner").textContent = "Congratulations! You win!";
        gameOver();
    } else if (computerScore == 5) {
        document.querySelector("#winner").textContent = "Aww, you lose. Try again next time!";
        gameOver();
    }
}

// Ends the game when one side reaches five points
function gameOver() {
    const buttons = document.querySelectorAll("button");
    for (let button of buttons) {
        button.disabled = true;
    }
}