
// VARIABLES FOR THE GAME

var guessLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessLength = guessLetters.length;
var wins = 0;
var losses = 0;
var guesses = 0;
var startGame = false;
var random = Math.floor(Math.random() * guessLength);
var randomWord = false;
var wordActive = false;
var randomArray = [];

// FUNCTIONS 

document.onkeydown = function (event) {
  
  var random = Math.floor(Math.random() * guessLength);
  var userGuess = event.key.toLowerCase();
 
    if (!startGame){
        guesses = 10;
        document.getElementById("startgame").innerHTML = "";
        document.getElementById("wins").innerHTML = "wins: " + wins;
        document.getElementById("losses").innerHTML= "losses: " + losses;
        document.getElementById("guesses").innerHTML = "guesses remaining: " + guesses;
        document.getElementById("lettersguessed").innerHTML= "letters guessed: ";
        var currentLetter = guessLetters[random];
        startGame = true;
      randomArray.unshift(currentLetter);
    }
          if (startGame){
            console.log(randomArray[0]);
           if (userGuess === randomArray[0]) {
             wins++;
             guesses++;
             startGame = false;
           }
           
          document.getElementById("lettersguessed").innerHTML += userGuess + " "
          guesses --;
          document.getElementById("guesses").innerHTML = "guesses remaining: " + guesses;           
          }
  
          if (guesses === 0) {
          document.getElementById("lettersguessed").innerHTML= "letters guessed: ";
          losses++;
          document.getElementById("losses").innerHTML= "losses: " + losses;
          startGame = false;
          }
}
     