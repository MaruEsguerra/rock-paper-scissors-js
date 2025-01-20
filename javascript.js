// Create a function called getComputerChoice
    // It has to randomly return one of the following strings: rock, paper, or scissors
        // You might want to use Math.random which returns a number that's greater than or equal to 1
function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 100) + 1;

    if (ComputerChoice <= 33) {
        return "rock";
    } else if (ComputerChoice >= 66) {
        return "scissors";
    } else {
        return "paper";
    }
}

let test_result = getComputerChoice();
console.log(test_result);