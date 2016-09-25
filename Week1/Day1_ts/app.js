var x = 7;
var num = 7;
var first_name = "Michael";
var last_name = "Seo";
var is_open = true;
var is_close = false;
var cats = ["Mittens", "Sox", "Doofus"];
var dogs = ["Rex", "Mutt", "Rocky"];
var hamsters = ["Hello", "World", "Hamster Name"];
var obj = {
    color: "red",
    name: "Sally",
    type: "Fire Truck"
};
var myFunc = function () { };
function otherFunc() { }
;
var someOtherFunc = function () { };
function someFunc() {
    return "Hello";
}
functionExample(5, "@");
var nullResult = functionExample(null, "x");
function functionExample(numTimes, stringToPrint) {
    if (numTimes === void 0) { numTimes = 1; }
    var result = "";
    for (var i = 0; i < numTimes; i++) {
        result += stringToPrint;
    }
    return result;
}
function sort(a, b) {
    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }
    else {
        return 0;
    }
}
function sort1(a, b) {
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}
var myVar;
var nullVar = null;
var undefVar = undefined;
var y = "World";
y = 8;
