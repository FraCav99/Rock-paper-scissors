// Create the moves and array of moves

const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const ROCK = 'ROCK';

const moves = [ROCK, PAPER, SCISSORS];

let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    let random = Math.floor(Math.random() * moves.length);
    let randomChoice = moves[random];

    return randomChoice;
}


function playRound(pSelection, cSelection) {
    // Check the user input
    if (!moves.includes(pSelection.toUpperCase())) {
        pSelection = computerPlay();    // Set the user choice to a random choice
        alert(`Wrong choice. ${pSelection} was selected for you!`);
    }

    // Check for victory
    if (
        pSelection.toUpperCase() === ROCK && cSelection === SCISSORS ||
        pSelection.toUpperCase() === SCISSORS && cSelection === PAPER ||
        pSelection.toUpperCase() === PAPER && cSelection === ROCK
    ) {
        playerWins++;
        alert(`
        ${pSelection.toUpperCase()} beats ${cSelection}\n
        player: ${playerWins} - computer: ${computerWins}
    `)
    }
    else if (pSelection.toUpperCase() === cSelection) {
        alert("It's a draw!");
    }
    else {
        computerWins++;
        alert(`
        ${cSelection} beats ${pSelection.toUpperCase()}\n
        player: ${playerWins} - computer: ${computerWins}
    `)
    }
}


function game() {

    for (let i = 1; i <= 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Choose Rock, Paper, Scissors");
        alert(`Round ${i}`);
        playRound(playerSelection, computerSelection);
    }

    let message = `Player: ${playerWins} - Computer: ${computerWins}`;

    if (playerWins > computerWins) alert(message + "\nPlayer Wins!");
    else if (playerWins === computerWins) {alert("It's a draw!")}
    else {alert(message + "\nComputer Wins!");}
}

game();