document.onkeyup = function gamestart() {
    // array of words for the game
    var wordBank = ["ghost", "goblin", "witch"];

    //ramdom word picker-will only select one.
    var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];


    // The array where the correct answers will be pushed to
    var answerArr = [];

    var guessedLetters = [];

    var guessesRemaining = 12;

    var wins = 0;



    for (var i = 0; i < randWord.length; i++) {
        answerArr.push('_');
        document.getElementById("word-div").textContent = answerArr.join(' ')
    }


    //what will keep track of how many more letters we have left to guess
    var leftToGuess = randWord.length;
    


    // this function grabs the user guess and compares to the random word generated and displays the letter if correct.
    document.onkeyup = function () {
        var currentClickGuess = event.key;
        // this is supposed to push the current clicks as already guessed letters
        document.getElementById("guessed-letters").innerHTML = currentClickGuess;
        for (var i = 0; i < leftToGuess; i++) {
            if (currentClickGuess === randWord[i]) {
                answerArr[i] = currentClickGuess;
                document.getElementById("word-div").innerHTML = answerArr.join(' ');
                audio.play();
            } 
            
        }
        // this is supposed to update the counter of guesses remaining
        if (currentClickGuess !== "g" || "h" || "o" || "s" || "t" || "b" || "l" || "i" || "n" || "w" || "t" || "c" || "h"){
            document.getElementById("lifes-Number").innerHTML = guessesRemaining--;
        }
        // this is supposed to reload the page if the user accurately guesses the first word.
        if (answerArr === randWord){
            location.reload();
        }

    }
    
};








