// Global Variable
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var gameOver = true;
var computerGuess;

// For displaying stats
var displayWins = document.getElementById("displayWins");
var displayLosses = document.getElementById("displayLosses");
var displayGuessesLeft = document.getElementById("displayGuessesLeft");
var displayIncorrectGuesses = document.getElementById("displayIncorrectGuesses");

// Arrays
var incorrectGuesses = [];
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Functions
// Starts the game, chooses random letter, sets stats to default, resets guesses left and incorrect
function gameStart() {
    computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log ("Computer Guess: " + computerGuess);
    guessesLeft = 9;
    gameOver = false;
    incorrectGuesses = [];
    displayGuessesLeft.innerHTML = "Guesses Left: " + guessesLeft;
    displayIncorrectGuesses.innerHTML = "Incorrect Guesses: " + incorrectGuesses;
}

//only calls gameStart if the game is over
function statusCheck() {
    if (gameOver) {
        gameStart();
    }
}

//when key is pressed
document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log("User Guess: " + userGuess);

    statusCheck();

    // If game is not over

    if (gameOver !== true) {
        // if (userGuess = "a" || "b" || "c" || "d" || "e" || "f" || "g" || "h" || "i" || "j" || "k" || "l" || "m" || "n" || "o" || "p" || "q" || "r" || "s" || "t" || "u" || "v" || "w" || "x" || "y" || "z") {
            if (userGuess === computerGuess) {
                // Increments wins, sets game as over, displays win
                wins++;
                gameOver = true;
                console.log("Wins: " + wins);
                displayWins.innerHTML = "Wins: " + wins;
                alert("You won! the Computer guessed: " + computerGuess);
            }

            else {
                if (guessesLeft == 1) {
                    // Increments losses, sets game as over, displays loss
                    console.log("Guesses Left: " + guessesLeft);
                    losses++;
                    gameOver = true;
                    console.log("Losses: " + losses);
                    displayLosses.innerHTML = "Losses " + losses;
                    alert("You lost. the Computer guessed: " + computerGuess);
                }

                else {
                    // Decraments Guesses left, displays Guesses Left and Incorrect Guesses
                    guessesLeft--;
                    incorrectGuesses.push(userGuess);
                    console.log("Guesses Left: " + guessesLeft);
                    displayGuessesLeft.innerHTML = "Guesses Left: " + guessesLeft
                    console.log("Incorrect Guesses: " + incorrectGuesses);
                    displayIncorrectGuesses.innerHTML = "Incorrect Guesses: " + incorrectGuesses;
                }
            }
        // }

        // else {
        //     alert("Please choose a valid letter");
        // }
    }

    statusCheck();
}