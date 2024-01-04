let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let currRound = 1;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerInput, computerInput) {
    let p = playerInput.toLowerCase();
    let c = computerInput.toLowerCase();
    
    if (p === c) {
        roundWinner = "None";
        return "Draw!";
    } else if (p === "rock") {
        if (c === "paper") {
            roundWinner = "Computer";
        } else if (c === "scissors") {
            roundWinner = "Player";
        }
    } else if (p === "paper") {
        if (c === "scissors") {
            roundWinner = "Computer";
        } else if (c === "rock") {
            roundWinner = "Player";
        }
    } else if (p === "scissors") {
        if (c === "rock") {
            roundWinner = "Computer";
        } else if (c === "paper") {
            roundWinner = "Player";
        }
    } else {
        return "Please enter a valid input!";
    }

    return "You played " + p + "\nComputer played " + c + "\n" + roundWinner + " wins!";
}

function game(rounds) {
    while (currRound < rounds) {
        const playerInput = prompt("[Round " + currRound + "] Enter your action: ");
        const computerInput = getComputerChoice();
        
        console.log(playRound(playerInput, computerInput));

        if (roundWinner === "Player") {
            playerScore++;
            currRound++;
        } else if (roundWinner === "Computer") {
            computerScore++;
            currRound++;
        }

        console.log("Score:\nPlayer: " + playerScore + "\nComputer: " + computerScore);
    }

    if (playerScore === computerScore) {
        console.log("The game is a draw!");
    } else if (playerScore > computerScore) {
        console.log("You win the entire game! :D");
    } else {
        console.log("Sorry, you lose the game :(");
    }
}

let rounds = prompt("How many rounds do you want to play?: ");
game(rounds);