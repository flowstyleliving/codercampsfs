var app;
(function (app) {
    var Classes;
    (function (Classes) {
        var Animal = (function () {
            function Animal(name, type, domest, sound, pred) {
                this.name = name;
                this.type = type;
                this.domest = domest;
                this.sound = sound;
                this.pred = pred;
            }
            return Animal;
        }());
        Classes.Animal = Animal;
    })(Classes = app.Classes || (app.Classes = {}));
})(app || (app = {}));
