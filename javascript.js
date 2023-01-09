function getComputerChoice() {
    let num = Math.ceil(Math.random() * 3);
    if (num == 1) {
        return "rock"
    }else if (num == 2) {
        return "paper"
    }else if (num == 3) {
        return "scissors"
    }
}

function playRound() {
    if (computerChoice === playerChoice) {
        return "It's a tie"
    }else if (computerChoice === "rock" && playerChoice === "paper") {
        return "You win! Paper beats rock."
    }else if (computerChoice === "rock" && playerChoice === "scissors") {
        return "You lose! Rock beats scissors."
    }else if (computerChoice === "paper" && playerChoice === "rock") {
        return "You lose! Paper beats rock."
    }else if (computerChoice === "paper" && playerChoice === "scissors") {
        return "You win! Scissors beats paper."
    }else if (computerChoice === "scissors" && playerChoice === "paper") {
        return "You lose! Scissors beats paper."
    }else if (computerChoice === "scissors" && playerChoice === "rock") {
        return "You win! Rock beats scissors."
    }
}

let playerChoice = "rock"
let computerChoice = getComputerChoice()

console.log(playRound())