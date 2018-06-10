
// VARIABLES FOR THE GAME

var guessWords = ["Cyclops", "Wolverine", "Storm"];
var guessLength = guessWords.length;
var wins = 0;
var losses = 0;
var guesses = 0;
var startGame = 0;
var wordActive = 0;

// FUNCTIONS 

document.onkeydown = function (event) {

    if (startGame === 0) {    
        startGame++;
        guesses = 10;
        document.getElementById("startgame").innerHTML = "";
        document.getElementById("wins").innerHTML = "wins: " + wins;
        document.getElementById("losses").innerHTML= "losses: " + losses;
        document.getElementById("guesses").innerHTML = "guesses remaining: " + guesses;
        document.getElementById("lettersguessed").innerHTML= "letters guessed: ";
    }

    else if (startGame === 1 && guesses > 0) {

        var userGuess = event.key.toLowerCase();
        document.getElementById("lettersguessed").innerHTML += userGuess + " "
        guesses --;
        document.getElementById("guesses").innerHTML = "guesses remaining: " + guesses;
        
        if (guesses === 0) {
        document.getElementById("lettersguessed").innerHTML= "letters guessed: ";
        losses++;
        document.getElementById("losses").innerHTML= "losses: " + losses;
        guesses = 10;
        wordActive = 0;
        }
    }

    if (wordActive === 0) {
        var currentWord = Math.floor(Math.random() * guessLength);
        var currentLength = guessWords[currentWord].length;
        wordActive++;
    }

        
    if (wordActive===1) {
        var blankWord = ""

        for (var j = 0; j < currentLength; j++) {

            blankWord += "_ "
            
            document.getElementById("currentword").innerHTML = blankWord;
        }
        
        if (guessWords[currentWord]==="Cyclops") {
        }

        else if (guessWords[currentWord]==="Wolverine") {
        }

        else if (guessWords[currentWord]==="Storm") {
        }   
    }
    
}
