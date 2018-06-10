
// VARIABLES FOR THE GAME

var guessWords = ["Cyclops", "Storm", "Wolverine"];
var guessLength = guessWords.length;
var wins = 0;
var losses = 0;
var lives = 0;
var startGame = 0;
var wordActive = 0;

// FUNCTIONS 

document.onkeydown = function (event) {

    if (startGame === 0) {    
        startGame++;
        alert(startGame)
        document.getElementById("startgame").innerHTML = "";
        document.getElementById("wins").innerHTML = "wins: " + wins;
        document.getElementById("losses").innerHTML= "losses: " + losses;
        document.getElementById("guesses").innerHTML = "guesses remaining: " + lives;
    }

    if (startGame === 1) {
        var userGuess = event.key;
        alert(userGuess);
    }

    if (wordActive === 0) {
        var currentWord = Math.floor(Math.random() * guessLength);
        var currentLength = guessWords[currentWord].length;
        alert(currentLength);
        wordActive++;
    }
        
    if (wordActive===1) {
        var blankWord = ""

        for (var j = 0; j < currentLength; j++) {

            blankWord += "_ "
            
            document.getElementById("currentword").innerHTML = blankWord;
        }
        
        alert(blankWord.charAt(3))
    }
    
}
