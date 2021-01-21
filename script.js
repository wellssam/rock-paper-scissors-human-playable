// A game of rock paper scissors the user plays against the computer


// Algo

// game:
function game(){
    // Create variable userScore
    let userScore = 0;
    // Create variable computerScore
    let computerScore = 0;


// Display message explaining the rules of the game to the user
function rule(){
    return "Welcome to Rock Paper Scissors! When prompted type in your move, either 'Rock', 'Paper' or 'Scissors' (not case sensitive). You will be playing against the computer, which will select its moves randomly. The first to win three rounds shall be declared the victor! Click 'Okay' when you're ready to begin."
}

window.alert(rule())

// Ask if user is ready to start the game
// window.alert("Are you ready to play?")

// round:

// Create a variable called computerMove

function round(){

let computerMove;

// randomly select either rock, paper or scissors
function computerPlay(){
    let num = Math.floor(Math.random() * 3) + 1;
    let move;
    if (num == 1){
        move = "ROCK";
    }
    else if (num == 2){
        move = "PAPER";
    }
    else if (num == 3){
        move = "SCISSORS";
    }
    return move;
}

// Assign the move to computerMove

computerMove = computerPlay();



// Create a variable userMove

let userMove 

// ask the user for input

function movePrompt(){
    userInput = (prompt("Your Move?"))
    return userInput
}

    // check if the userInput == "ROCK","PAPER","SCISSORS"
    // if it does, return the input.
    // If it doesn't prompt the user for another move. 

function moveCheck(move){
    if(move != "ROCK" && move != "PAPER" && move != "SCISSORS") {
        window.alert("Sorry, invalid move!")
        return moveCheck(movePrompt().toUpperCase())
        
    }
    else

    return move;
}

// convert user input to all caps and assign it to userMove

userMove = moveCheck(movePrompt().toUpperCase())


// Display the user's move and the computer's move.
function moveDisplay() {
    return "Your Move: " + userMove + " VS. " + "Computer's Move: " + computerMove 
}

window.alert(moveDisplay())

function roundResolve(){
    // Compare the user's input with computerMove
    if (userMove == "ROCK" && computerMove == "SCISSORS"){
        return "You Win!"  
    }
    else if (userMove == "SCISSORS" && computerMove == "PAPER"){
        return "You Win!"  
    }
    else if (userMove == "PAPER" && computerMove == "ROCK"){
        return "You Win!"  
    }
    else if(computerMove == userMove) {
        return "A tie!"
    }
    else {
        return "You Lose!"
    }
}

return roundResolve();
}

// If user wins a round, increase user score by one
// If computer wins increase computer score by one

function scoreKeeper(result){
    window.alert(result)
    if (result == "A Tie!"){
        return scoreBoard()
    }
    else if (result == "You Win!"){
        userScore++
        return scoreBoard()
    }
    else if (result == "You Lose!"){
        computerScore++
        return scoreBoard()
    }
}



// display both scores
function scoreBoard(){
    window.alert(("User Score: " + userScore + "   Computer Score: " + computerScore))
    if (userScore > computerScore){
        return "You're pulling ahead!"
    }
    else if (computerScore > userScore){
        return "You can still catch up!"
    }
    else {
        return "It's neck and neck!"
    }
}



function victory(){
    window.alert ("Congratulations! You put that dirty computer in its place! To play again, refresh this page.")
}

function defeat(){
    window.alert ("Curses! The machine has defeated you! If you would like to try again, refresh this page.")
}

// Check scores. If user score == 5 end game and declare user the winnder. If computer score == 5 end game and declare computer the winner. 

function recursiveGame(){
    scoreKeeper(round())
    window.alert(scoreBoard())
    if (userScore >= 3){
        return victory()
    }
    else if (computerScore >= 3){
        return defeat()
    }
    else {
        return recursiveGame();
    }
}

return recursiveGame();

}


window.alert(game())












// function gameLoop(){
    //     let gameOver = 0;
    //     while (gameOver == 0){
    //         if (userScore >= 3){
    //             gameOver = 1
    //             return victory();
    //         }
    //         else if(computerScore >= 3){
    //             gameOver = 1
    //             return defeat();
    //         }
    //         else {
    //             scoreKeeper(round())
    //             return scoreBoard()
    //         }
    //     }
    // }
    
    // function gameCounter(){
    //     for (i = 0; i < 4; i++){
    //         scoreKeeper(round())
    //         return scoreBoard()
    //     }
    // }

