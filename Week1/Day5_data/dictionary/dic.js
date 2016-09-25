var Dictionary = (function () {
    function Dictionary() {
        this.length = 0;
    }
    Dictionary.prototype.add = function (key, value) {
        this[key] = value;
        this.length++;
    };
    Dictionary.prototype.remove = function (key) {
        if (this[key] && this.length > 0)
            this.length--;
        this[key] = undefined;
    };
    Dictionary.prototype.find = function (key) {
        return this[key];
    };
    Dictionary.prototype.rename = function (og, newName) {
        var value = this[og];
        this[newName] = value;
        this[og] = undefined;
    };
    Dictionary.prototype.findLength = function () {
        var result = 0;
        for (var key in this) {
            if (this[key] !== undefined && this.hasOwnProperty(key)) {
                result++;
            }
        }
    };
    return Dictionary;
}());
var d = new Dictionary();
