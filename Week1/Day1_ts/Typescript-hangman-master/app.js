var words = ['JavaScript', '.NET', 'NodeJS', 'Angular', 'Cat'];
var word = randomizeWord(words);
var guessedWord = [];
var guessed = [];
var wrongGuessed = [];
var strikes = 0;
displayWord(word);
document.getElementById('letterGuessForm').onsubmit = function (event) {
    event.preventDefault();
    var guessInput = document.getElementById('letterGuess');
    var guess = guessInput.value.toLowerCase();
    if (guessed.indexOf(guess) !== -1) {
        alert('You have already guessed the letter ' + guess);
        guessInput.value = '';
        return;
    }
    if (word.toLowerCase().indexOf(guess) === -1) {
        strikeout(guess);
    }
    else {
        correctGuess(guess);
        if (guessedWord.indexOf('_') === -1)
            winGame();
    }
    guessed.push(guess);
    if (guessed.length === 1)
        document.getElementById('guessedLetters').innerHTML += guess;
    else
        document.getElementById('guessedLetters').innerHTML += ', ' + guess;
    guessInput.value = '';
    if (strikes === 6)
        gameOver();
};
function displayWord(word) {
    word = word.toLowerCase();
    for (var i = 0; i < word.length; i++) {
        if (/[a-zA-Z]/g.test(word[i])) {
            guessedWord.push('_');
        }
        else {
            guessedWord.push(word[i]);
        }
    }
    document.getElementById('randomWord').innerHTML = guessedWord.join(" ");
}
function randomizeWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}
function correctGuess(guess) {
    var w = word.toLowerCase();
    console.log(w);
    console.log(guess);
    for (var i = 0; i < w.length; i++) {
        if (w[i] === guess) {
            guessedWord[i] = guess;
        }
    }
    document.getElementById('randomWord').innerHTML = guessedWord.join(" ");
}
function strikeout(guess) {
    strikes++;
    document.getElementById('strikes').innerHTML += 'X ';
    wrongGuessed.push(guess);
    if (wrongGuessed.length === 1)
        document.getElementById('wrongGuessedLetters').innerHTML += guess;
    else
        document.getElementById('wrongGuessedLetters').innerHTML += ", " + guess;
}
function winGame() {
    alert('Congrats, you have won!');
}
function gameOver() {
    document.getElementById('randomWord').innerHTML = "You lose. The word was: <br/><h3>" + word + "</h3>";
}
