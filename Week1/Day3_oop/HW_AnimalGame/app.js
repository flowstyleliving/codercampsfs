var app;
(function (app) {
    var animals = [
        new app.Classes.Animal("dog", "mammal", true, "woof"),
        new app.Classes.Animal("cat", "mammal", true, "meow"),
        new app.Classes.Animal("parrot", "bird", true, "Polly want a cracker")
    ];
    var q = [
        ["is it a mammal?", "is it a bird?", "is it a reptile?", "is it a bug (including arachnids)?"],
        ["is it usually domesticated?"],
        ["is it a predator?"],
        ["does it live in the savannah?", "does it live in the desert?", "does it live in the desert?", "does it live in the water?", "does it live in the city?"]
    ];
    var criteria = [];
    var x = $('#yes').val();
    criteria.push(x);
    var answer = animals.every(function (item) { return item.indexOf(criteria) !== -1; });
    console.log(answer);
    function check() {
        for (var i = 0; i < q[0][i].length; i++) {
            if (q[0][i] === $('#yes').val) {
                criteria.push("mammal");
            }
        }
    }
})(app || (app = {}));
