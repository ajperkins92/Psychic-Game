
// Initial base of code to define variables
   var losses = document.getElementById("losses");
   var wins = document.getElementById("wins");
   var guessesLeft = document.getElementById("guess-left");
   var guessesSoFar = document.getElementById("guesses-so-far");
   var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   var userGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// A bunch of alerts describing the conditions of the game
   alert("Welcome to the Psychic Game!");

   alert("The objective of the game is to demonstrate your psychic prowess by guessing the letter that I'm thinking of!");

   alert("If you should happen to guess the correct letter that I'm thinking of within 9 tries, you will win the round!");

   alert("If, however, you fail to guess correctly, I will win the round!");

   alert("LET THE GAMES BEGIN!!!");

// This is where the actual game will get played
   document.onkeyup = function(event) {

    var computerGuess = [Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerGuess) {
        wins++; 
        guessesSoFar === 0; 
    }

    else {loss}

   }

