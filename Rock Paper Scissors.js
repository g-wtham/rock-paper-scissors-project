let getPlayerChoice = () => {
    let player_choice = prompt("Let's Play : Rock/Paper/Scissors? ")
    return player_choice.toLowerCase()
}

let getComputerChoice = () => {
    let game_choices = ['rock', 'paper', 'scissors']
    return game_choices[Math.floor(Math.random() * game_choices.length)]
}


let playRound = (getPlayerChoice, getComputerChoice) => {
    
    let  playerChoice = getPlayerChoice()
    let  computerChoice = getComputerChoice()
    
    if (playerChoice === computerChoice){
        console.log(`${playerChoice} and ${computerChoice} makes a TIE!`)
        return 'TIE'
    }
        
    else if(
        (playerChoice=="rock" && computerChoice=="scissors") ||
        (playerChoice=="paper" && computerChoice=="rock") ||
        (playerChoice=="scissors" && computerChoice=="paper")
    ){
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
        return 'playerWins'
    }

    else{
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
        return 'computerWins'
    }
}

let game = () => {
    
    computerScore = 0
    playerScore = 0
    
    for (i=1; i<=5; i++){
        
        console.log(`Round ${i}: `)
    
        gameWinner = playRound(getPlayerChoice, getComputerChoice)

        if (gameWinner=='playerWins'){
            playerScore++
        }
        else if(gameWinner=='computerWins'){
            computerScore++
        }
        
        console.log(`Player Score: ${playerScore} - Computer Score: ${computerScore}`)
    }
    
    if (playerScore > computerScore){
        console.log("You win the game!")
    }
    else if(playerScore == computerScore){
        console.log("It's a TIE")
    }
    else {
        console.log("You lose the game!")
    }
}

game();