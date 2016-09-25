let turn = false;
let gameSpaces = [];
let theSquares = document.getElementsByClassName('squares');

// push all squares into spaces
gameSpaces.push(theSquares);
let arr = [];



function playerClick(clickedId) {
  let playerSpace = document.getElementById(clickedId);
  let DOM_img = document.createElement("img");
  DOM_img.src = "http://www.dreamincode.net/forums/uploads/post-97990-1260678636.png";
  DOM_img.setAttribute("class", "pieces");
  let playerPickedIds = [];
  playerPickedIds.push(clickedId);
  arr[0][1] = playerPickedIds.indexOf("1");
  // gameSquares = gameSquares.filter((item) => item.id !== '"' + clickedId + "''")
  // if(idxOfSq !== -1) gameSpaces.splice(idxOfSq, 1);
  playerSpace.appendChild(DOM_img);
  turn = true;
}

while(turn === true) {
  compClick();
}

function compClick() {

}
