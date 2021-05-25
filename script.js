let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// This function will be called at the start of each new round in order to generate the new secret target number
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
// This function will be called each round to determine which guess is closest to the target number
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    if (!(humanGuess >= 0 && humanGuess <= 9)) {
        alert('Dear user, your guess is out of range. Please make sure to input a number between 0 and 9.')
    }
    // We will calculate how close are the user and the computer from the target number
    let humanDif = Math.abs(targetNumber - humanGuess);
    let computerDif = Math.abs(targetNumber - computerGuess);

    // We will determine which player wins based on which guess is closest to the target
    // If both players are tied, the human will win by default
    if (humanDif === computerDif) {
        return true;
    } else if (humanDif < computerDif) {
        return true;
    } else if (humanDif > computerDif) {
        return false;
    }
}
// This function will be used to correctly increase the winner's score after each round
const updateScore = winner => {
    switch (winner) {
        case 'human':
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
    }
}
// This function will be used to update the round number after each round
const advanceRound = () => {
    currentRoundNumber += 1;
}
