var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var Computer = (function () {
        function Computer(model, price, os) {
            if (!model)
                throw new Error("A model name is required!");
            else
                this.model = model;
            if (!price)
                throw new Error("A price is required!");
            else
                this.price = price;
        }
        return Computer;
    }());
    var Apple = (function (_super) {
        __extends(Apple, _super);
        function Apple(model, price, os) {
            _super.call(this, model, price, os);
        }
        return Apple;
    }(Computer));
    var Windows = (function (_super) {
        __extends(Windows, _super);
        function Windows(model, price, os) {
            _super.call(this, model, price, os);
        }
        return Windows;
    }(Computer));
    var obj1 = new Apple("Macbook Pro", "$3,500.00", "OSX Yosemite");
    var obj2 = new Apple("Macbook Pro", "$2,000.00", "OSX Mavericks");
    var obj3 = new Windows("Dell", "$544.89", "Windows 8.1");
})(app || (app = {}));
