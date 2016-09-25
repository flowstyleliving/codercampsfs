var turn = false;
var gameSpaces = [];
var theSquares = document.getElementsByClassName('squares');
gameSpaces.push(theSquares);
var arr = [];
function playerClick(clickedId) {
    var playerSpace = document.getElementById(clickedId);
    var DOM_img = document.createElement("img");
    DOM_img.src = "http://www.dreamincode.net/forums/uploads/post-97990-1260678636.png";
    DOM_img.setAttribute("class", "pieces");
    var playerPickedIds = [];
    playerPickedIds.push(clickedId);
    arr[0][1] = playerPickedIds.indexOf("1");
    playerSpace.appendChild(DOM_img);
    turn = true;
}
while (turn === true) {
    compClick();
}
function compClick() {
}
