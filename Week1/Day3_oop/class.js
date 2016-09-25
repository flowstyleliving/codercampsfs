var shiza;
(function (shiza) {
    shiza.myvar = 5;
    var Dog = (function () {
        function Dog(age, owner, numLegs, collarColor) {
            if (numLegs === void 0) { numLegs = 4; }
            this.owner = owner;
            this.numLegs = numLegs;
            this.collarColor = collarColor;
            this.name = "Rex";
            this.SSN = "hahaha";
            this.age = age;
        }
        return Dog;
    }());
    var myDog = new Dog(5, "Jeremy");
    myDog.name;
    myDog.age = 15;
})(shiza || (shiza = {}));
