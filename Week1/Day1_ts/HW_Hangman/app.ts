let words = ["potato", "tomato", "garlic", "onions", "carrot"];
let game_word = words[Math.floor(Math.random() * words.length)];
let lives = 6;
let lettersMatches;
displayBlanks(game_word);

//display Blank letters
function displayBlanks(game_word){
    // let element = <HTMLInputElement>document.getElementById('displayWord');
    let blanks = "";
    for(let i = 0; i < game_word.length; i++) {
      blanks += "_ ";
    }
    document.getElementById('displayWord').innerHTML = blanks;
    // element.innerHTML = "blanks";
}

//check guess value with the game_word
function guessLetter() {
  let guessed = (<HTMLInputElement>document.getElementById('guess')).value;
  for(let i = 0; i < game_word.length; i++) {
    if(guessed === game_word[i]) {
      var textnode = document.createTextNode(game_word[i]);
      var item = document.getElementById("displayWord").childNodes[i];
      item.replaceChild(textnode, item.childNodes[i]);
    } else {
      wrong();
    }
  }
}

function wrong() {
  lives -= 1;
  hangman();
}


function hangman() {
  let man = <HTMLInputElement>document.getElementById('man');
  if(lives === 5) {
    man.innerHTML = "<div id='head'></div>";
  } else if(lives === 4) {
    man.innerHTML = "<div id='torso'></div>";
  } else if(lives === 3) {
    man.innerHTML = "<div id='left_arm'></div>";
  } else if(lives === 2) {
    man.innerHTML = "<div id='right_arm'></div>";
  } else if(lives === 1) {
    man.innerHTML = "<div id='left_leg'></div>";
  } else if(lives === 0) {
    man.innerHTML = "<div id='right_leg'></div>";
  }
}
