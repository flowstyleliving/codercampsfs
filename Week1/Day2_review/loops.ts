// for loops
for(let i = 0; i < arr.length; i++) {

}

// while loops
let idx = 0
while(idx < 10) {
  idx++;
}

// do while loops
let x = 0;
do {
  x++;
} while(x < 10);

// for in loops //NEVER USE IN ARRAY
for(let i in arr) {
  //i is the idx of each item
}

// for of loops //can't mess with index, maybe
for(let item of arr) {
  //item is arr[i], not just the index
}

// forEach loops //can't modify items, prob
arr.forEach((item, index, arr) => {

})
