arr.push("purple");
arr.pop();
arr.unshift("purple");
arr.shift();
var copiedArr = arr.slice(0, 3);
arr.splice(2, 0, "purple");
arr.splice(2, 1);
arr.splice(2, 1, "white");
var idxOfBlue = arr.indexOf("blue");
if (idxOfBlue !== -1)
    arr.splice(idxOfBlue, 1);
console.log("arr = " + arr);
function vivaLa() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== "red" && arr[i] !== "white" && arr[i] !== "green") {
            return;
        }
    }
    console.log("Viva la Mexico!");
}
vivaLa();
var yo = ['blue', 'red', 'yellow'];
for (var _i = 0, yo_1 = yo; _i < yo_1.length; _i++) {
    var color = yo_1[_i];
    ;
}
arr = arr.map(function (item) {
    return item += " ranger";
});
console.log(arr);
var filtered = arr.filter(function (item) {
    return (item.indexOf('r') !== -1);
});
filtered = arr.filter(function (item) { return item.indexOf('r') !== -1; });
console.log(arr);
var every = arr.every(function (item) { return item.indexOf('r') !== -1; });
console.log(every);
var some = arr.some(function (item) { return item.indexOf('r') !== -1; });
console.log(some);
var reversed = arr.reverse();
var sorted = arr.sort(function (a, b) { return b - a; });
var words = ["Red", "Blue", "apple", "cARROT", "Windows"];
words = words.sort(function (a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
});
