var app;
(function (app) {
    var Classes;
    (function (Classes) {
        var Contact = (function () {
            function Contact(name, email, phone) {
                this.name = name;
                this.email = email;
                this.phone = phone;
            }
            return Contact;
        }());
        Classes.Contact = Contact;
    })(Classes = app.Classes || (app.Classes = {}));
})(app || (app = {}));
