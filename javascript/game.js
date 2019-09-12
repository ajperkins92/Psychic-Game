
// Variables that define the starting number/letter values of the game
var losses = 0;
var wins = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

// Variables that will be used to tie the value-holding varialbes above to the HTML elements on the page
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guess-left-text");
var guessesSoFarText = document.getElementById("guesses-so-far-text");


// A bunch of alerts describing the conditions of the game

alert("Welcome to the Psychic Game!");

alert("The objective of the game is to demonstrate your psychic prowess by guessing the letter that I'm thinking of!");

alert("If you should happen to guess the correct letter that I'm thinking of within 9 tries, you will win the round!");

alert("If, however, you fail to guess correctly, I will win the round!");

alert("LET THE GAMES BEGIN!!!");

// The game actually starts getting played here
document.onkeyup = function (event) {

    var userGuess = event.key;
    // guessesSoFar.push(userGuess);
    var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];

    if (userGuess === computerGuess) {
        wins++;
        guessesSoFar = [];
        guessesLeft = 10;
    }

    if (userGuess !== computerGuess) {
        guessesSoFar.push(userGuess);
        guessesLeft--;
    }
    if (guessesLeft === 0) {
        losses++;
        guessesSoFar = [];
        guessesLeft = 10;
    }



    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    guessesSoFarText.textContent = guessesSoFar;
};





