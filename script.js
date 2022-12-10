function getComputerChoice () {
    let choice = ["Rock", "Paper", "Scissors"]
    return choice[Math.floor(Math.random() * choice.length)]
}

function getPlayerChoice () {
    return prompt("Choose your weapon: Rock, Paper, Scissors")
}

function playAround (playerSelection, computerSelection) {
    if ( playerSelection == computerSelection) {
        return "Its tie!"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats Rock"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats Scissors"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats Paper"
    }
}

function game() {
    storewin = []
    storelose = []
    for (let i = 0; i < 5; i++) {
        let result = playAround(getPlayerChoice().toLowerCase(), getComputerChoice().toLowerCase())
        console.log(result)
        if (result.includes("win")) {
            storewin.push(result)
        } else if (result.includes("lose")) {
            storelose.push(result)
        }
        // console.log(playAround(getPlayerChoice().toLowerCase(), getComputerChoice().toLowerCase())) // using toLowerCase to handle case sensitive
    }
    console.log("===")
    if (storewin.length > storelose.length) {
        return "Congratulations, You win the game!"
    }
    else if (storewin.length < storelose.length) {
        return "Sorry, You lose the game"
    } else {
        return "Wow, Its Draw!"
    }
}

console.log(game())