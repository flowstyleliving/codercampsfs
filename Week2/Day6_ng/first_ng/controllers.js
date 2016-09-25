var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                this.title = "hello World!";
                this.contact = { name: null, email: null, phoneNumber: null };
                this.contacts = [];
            }
            HomeController.prototype.createContact = function () {
                this.contacts.push(this.contact);
                this.contact = { name: null, email: null, phoneNumber: null };
            };
            HomeController.prototype.deleteContact = function (contact) {
                this.contacts.splice(this.contacts.indexOf(contact), 1);
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
