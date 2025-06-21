//randomly get computer choice
function getComputerChoice() {
    let randnum = Math.random()
    let computerPlay = ''

    if (randnum <= 0.33) {
        computerPlay = 'Rock'
    } else if (randnum > 0.33 && randnum <= 0.66 ) {
        computerPlay = 'Paper'
    } else {
        computerPlay = 'Scissors'
    }

    return computerPlay
}

//prompt player for move
function getHumanChoice() {
    let answer = prompt('[R]ock, [P]aper, [S]cissors')
    let humanPlay = ''

    if (answer.toLowerCase() == 'r' || answer.toLowerCase() == 'rock') {
        humanPlay = 'Rock'
    } else if (answer.toLowerCase() == 'p' || answer.toLowerCase() == 'paper') {
        humanPlay = 'Paper'
    } else if (answer.toLowerCase() == 's' || answer.toLowerCase() == 'scissors') {
        humanPlay = 'Scissors'
    } else {
        return console.error();
    }

    return humanPlay
}

//logic for determining winner
function determineWinner(move1,move2) {
    if (move1 == move2) {
        return 'No winner'
    } else if ((move1 == 'Rock' && move2 == 'Paper') || (move1 == 'Paper' && move2 == 'Rock')) {
        return 'Paper'
    } else if ((move1 == 'Paper' && move2 == 'Scissors') || (move1 == 'Scissors' && move2 == 'Paper')) {
        return 'Scissors'
    } else if ((move1 == 'Scissors' && move2 == 'Rock') || (move1 == 'Rock' && move2 == 'Scissors')) {
        return 'Rock'
    }
}

//logic for one round
function playRound() {
    
    //play a round
    let humanMove = getHumanChoice();
    let computerMove = getComputerChoice();
    console.log(`Human plays ${humanMove}. Computer plays ${computerMove}.`)
    
    //determine winner
    let winningMove = determineWinner(humanMove,computerMove)
    let winner = ''
    let loser = ''

    if (humanMove == winningMove) {
        winner = 'Human'
        loser = 'Computer'
    } else if (computerMove == winningMove) {
        winner = 'Computer'
        loser = 'Human'
    } else {
        winner = 'None'
    }

    //log outcome of match
    if (winner == 'None') {
        console.log('No winner this round.')
    } else {
        console.log(`${winner} beats ${loser} with ${winningMove}.`)
    }

    return winner
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    let round = 0

    while (round < 5) {
        round++
        console.log(`----- Round ${round} -----`)

        let winner = playRound()
        
        if (winner == 'Human') {
            humanScore++
        } else if (winner == 'Computer') {
            computerScore++
        } else {
            //pass
        }

        console.log(`Score: Computer ${computerScore} - Human ${humanScore}`)
    }
    
    console.log('-------------------------------------')
    console.log(`FINAL SCORE: Computer ${computerScore} - Human ${humanScore}`)
}

//playRound(); //works for individual round
playGame();
console.log('Reload the page to play again!')