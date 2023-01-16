let playerButtons = document.querySelector(".container")
let buttonRock = document.querySelector(".rock")
let buttonPaper = document.querySelector(".paper")
let buttonScissors = document.querySelector(".scissors")
let buttonPlay = document.querySelector(".play")
let computerChoicePara = document.querySelector(".computerChoice")
let resultPara = document.querySelector(".result")
let pointsPara = document.querySelector(".points")

let playerChoice = "paper"
let result
let computerWins = 0;
let playerWins = 0;

function selectButton() {
    if(playerChoice == "rock") {
        buttonRock.classList.add("selected")
    }else if(playerChoice == "paper") {
        buttonPaper.classList.add("selected")
    }else if(playerChoice == "scissors") {
        buttonScissors.classList.add("selected")
    }
}

function removeSelection() {
    buttonRock.classList.remove("selected");
    buttonPaper.classList.remove("selected");
    buttonScissors.classList.remove("selected")
}

function playRound(){
    
    let computerChoice

    function getComputerChoice() {
        let num = Math.ceil(Math.random() * 3);
        if (num == 1) {
            computerChoicePara.textContent = "🪨"
            return computerChoice = "rock"
        }else if (num == 2) {
            computerChoicePara.textContent = "📄"
            return computerChoice = "paper"
        }else if (num == 3) {
            computerChoicePara.textContent = "✂️"
            return computerChoice = "scissors"
        }
    }
    getComputerChoice()

    if (computerChoice === playerChoice) {
        return result = "It's a tie"
    }else if (computerChoice === "rock" && playerChoice === "paper") {
        return result = "You win! Paper beats rock."
    }else if (computerChoice === "rock" && playerChoice === "scissors") {
        return result = "You lose! Rock beats scissors."
    }else if (computerChoice === "paper" && playerChoice === "rock") {
        return result = "You lose! Paper beats rock."
    }else if (computerChoice === "paper" && playerChoice === "scissors") {
        return result = "You win! Scissors beats paper."
    }else if (computerChoice === "scissors" && playerChoice === "paper") {
        return result = "You lose! Scissors beats paper."
    }else if (computerChoice === "scissors" && playerChoice === "rock") {
        return result = "You win! Rock beats scissors."
    }
}

function game() {
        if (result.slice(4, 6) == "wi") {
            playerWins++
        }else if (result.slice(4, 6) == "lo") {
            computerWins++}
}

selectButton()

buttonRock.addEventListener("click", () => {playerChoice="rock"})
buttonPaper.addEventListener("click", () => {playerChoice="paper"})
buttonScissors.addEventListener("click", () => {playerChoice="scissors"})
playerButtons.addEventListener("click", removeSelection)
playerButtons.addEventListener("click", selectButton)

buttonPlay.addEventListener("click", playRound)
buttonPlay.addEventListener("click", () => {resultPara.textContent = result})
buttonPlay.addEventListener("click", game)
buttonPlay.addEventListener("click", () => {
    pointsPara.textContent = `Player: ${playerWins} Computer: ${computerWins}`})