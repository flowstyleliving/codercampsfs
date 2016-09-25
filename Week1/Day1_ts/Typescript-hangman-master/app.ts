let words = ['JavaScript', '.NET', 'NodeJS', 'Angular', 'Cat']
let word = randomizeWord(words);
let guessedWord = [];
let guessed: Array<string> = [];
let wrongGuessed: Array<string> = [];
let strikes = 0;
displayWord(word);

document.getElementById('letterGuessForm').onsubmit = function(event) {
  // don't reload the page
  event.preventDefault();
  let guessInput = <HTMLInputElement>document.getElementById('letterGuess');
  let guess = guessInput.value.toLowerCase();
  if (guessed.indexOf(guess) !== -1) {
    alert('You have already guessed the letter ' + guess);
    guessInput.value = '';
    return;
  }
  if (word.toLowerCase().indexOf(guess) === -1) {
    // guess is incorrect
    strikeout(guess);
  } else {
    // guessed letter exists in word
    correctGuess(guess);
    if (guessedWord.indexOf('_') === -1) winGame();
  }
  guessed.push(guess);
  if (guessed.length === 1) document.getElementById('guessedLetters').innerHTML += guess
  else document.getElementById('guessedLetters').innerHTML += ', ' + guess
  // clear the input
  guessInput.value = '';
  if (strikes === 6) gameOver();
}

// Display the random word on the screen as underscores
function displayWord(word: string): void {
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (/[a-zA-Z]/g.test(word[i])) {
      // character at word[i] is a letter, replace with underscore
      guessedWord.push('_');
    } else {
      // character at word[i] is a symbol or number, do not replace
      guessedWord.push(word[i]);
    }
  }
  document.getElementById('randomWord').innerHTML = guessedWord.join(" ");
}

// Pick a random word from the array passed in, and return it
function randomizeWord(words: Array<string>): string {
  return words[Math.floor(Math.random() * words.length)];
}

function correctGuess(guess: string) {
  let w = word.toLowerCase();
  console.log(w);
  console.log(guess);
  for(let i = 0; i < w.length; i++) {
    if(w[i] === guess) {
      guessedWord[i] = guess;
    }
  }
  document.getElementById('randomWord').innerHTML = guessedWord.join(" ");
}

function strikeout(guess: string) {
  strikes++;
  document.getElementById('strikes').innerHTML += 'X '
  wrongGuessed.push(guess);
  if (wrongGuessed.length === 1) document.getElementById('wrongGuessedLetters').innerHTML += guess;
  else document.getElementById('wrongGuessedLetters').innerHTML += ", " + guess;
}

function winGame() {
  alert('Congrats, you have won!');
}

function gameOver() {
  document.getElementById('randomWord').innerHTML = "You lose. The word was: <br/><h3>" + word + "</h3>";
}
