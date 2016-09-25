// let arr = ["red", "blue", "yellow", "green"];

// add purple to the front of the array
arr.push("purple");
// remove the last element of the array
arr.pop();
// add purple to the beginning of the array
arr.unshift("purple")
// remove the first element of the array
arr.shift();
// get the first 3 elements of the array //will return a copy of the arr
// slice(startIdx, endIdx)
// startIdx is the index of the first element you want
// endIdx is the index AFTER the last element you want
let copiedArr = arr.slice(0, 3);
// Splice can be used for
// splice(startIdx, remove, "replace")
// add an element in between "blue" and "yellow" in the array
arr.splice(2, 0, "purple");
// remove "purple" in the middle of the array
arr.splice(2, 1);
// remove "yellow" and replace it with "white"
arr.splice(2, 1, "white");
// remove "blue" from the array
let idxOfBlue = arr.indexOf("blue");
if(idxOfBlue !== -1) arr.splice(idxOfBlue, 1);
console.log("arr = " + arr);
function vivaLa() {
for(let i = 0; i < arr.length; i++) {
  if (arr[i] !== "red" && arr[i] !== "white" && arr[i] !== "green") {
  return; }
}
  console.log("Viva la Mexico!");
}
vivaLa();

//element == item, index

//For of loop
let yo = ['blue', 'red', 'yellow'];
for(let color of yo);

//For in loop
//index for objects

// indexOf
// applies something to each item in the array
arr = arr.map(function(item) {
  return item += " ranger";
});
//["red ranger", "white ranger", "green ranger"]
console.log(arr)

// filter //keeps truthy stuff, not fasley stuff
let filtered = arr.filter(function(item) {
  //if (indexOf === -1) 'r' does not exist
  //if (indexOf !== -1) 'r' does exist
  return (item.indexOf('r') !== -1);
});

filtered = arr.filter( (item) => item.indexOf('r') !== -1 );

// What's happening with the .filter method?
//function filter() {
  //let new_arr = [];
    //for(var i = 0; i < arr.length; i++){
      //let item = arr[i]l
        //if(item.indexOf('n') !== -1 {
          //new_arr.push(item);
        //}
      //)
    //return new_arr;
  //}
//}

console.log(arr);


// .every //Is every item valid?
let every = arr.every((item) => item.indexOf('r') !== -1);
console.log(every) // == false || true

// .some //Are at least some items in the array valid?
let some = arr.some((item) => item.indexOf('r') !== -1);
console.log(some); // == true || false

//reverse
let reversed = arr.reverse();

//sort
let sorted = arr.sort((a: any, b: any) => b - a);
//[1, 3, 5, 7] // 3 - 1 = 2 => to the right
// if negative => to the left


let words = ["Red", "Blue", "apple", "cARROT", "Windows"];

words = words.sort(function(a,b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0
})
