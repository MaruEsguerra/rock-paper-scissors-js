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

let PC_result = getComputerChoice();
let user_result = getHumanChoice();
console.log(PC_result);
console.log(user_result);