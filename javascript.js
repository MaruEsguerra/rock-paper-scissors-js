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

// Create a function called getHumanChoice
    // Use prompt to return one of the valid choices: rock, paper, scissors.
        // Potentially code defensively so that the human can only choose rock, paper, or scissors.
function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("Please pick only among: rock, paper, or scissors.").toLowerCase();
    }
    return humanChoice;
}

// Global variables
let humanScore = 0;
let computerScore = 0;

// Create function called playRound
    // Make two arguments called humanChoice and computerChoice that logs the choices
    // Compare the results
    // Print winner for the round through console.log (ex. You lose! Paper breats rock.)
    // Increment the scores based on round winner
function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    // Note to self: lean more about js mapping later.
    const winPairs = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (winPairs[humanChoice] === computerChoice) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

playRound();
console.log(`Score: User ${humanScore} - Computer ${computerScore}.`);