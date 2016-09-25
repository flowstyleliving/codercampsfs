var booleans;
(function (booleans) {
    var bool = true;
    if (bool) {
        console.log("Hello World");
    }
    if (bool)
        console.log("Hello World");
    if (bool)
        console.log("Hello World");
})(booleans || (booleans = {}));
