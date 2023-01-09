function playRound() {

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

    function getPlayerChoice () {
        let keepGoing = true 
        while(keepGoing == true) {
        let choice = prompt("Rock, Paper or Scissors?");
        
        if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors") {
            let keepGoing = false
            return choice.toLowerCase()
        }else {
            alert("Not a choice, try again.")
        }
        }
    }

    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
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

let computerWins = 0;
let playerWins = 0;

function game() {
    for (let counter = 0; counter < 5; counter++) {
        let result = playRound();
        if (result.slice(4, 6) == "wi") {
            console.log("Player: " + playerWins + " Computer: " + computerWins);
            console.log(result);
            playerWins++
        }else if (result.slice(4, 6) == "lo") {
            console.log("Player: " + playerWins + " Computer: " + computerWins);
            console.log(result);
            computerWins++
        }else if (result.slice(4, 6) == " a") {
            console.log("Player: " + playerWins + " Computer: " + computerWins);
            console.log(result);
        }else {console.log(result + " is not an option!")}
    }
}

function announceWinner(){
    alert("Final result: Player: " + playerWins + " Computer: " + computerWins )

    if (computerWins > playerWins) {
        alert("YOU LOST")
    }else if (computerWins < playerWins) {
        alert("YOU WON")
    }else {alert("Nobody won, everyone lost...")}
}

function playAgain() {
    if (confirm("Do you want to play again?") == true) {
        location.reload()
    }else {
        alert("Alright...")
    }
}

game()
announceWinner()
playAgain()
