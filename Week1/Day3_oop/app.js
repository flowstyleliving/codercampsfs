var app;
(function (app) {
    var contacts = [
        new app.Classes.Contact('Seo', 'flowstyleliving@gmail.com', '(720)-336-9736'),
        new app.Classes.Contact('Michael', 'mys628@gmail.com', '(720)-33-MYSEO')
    ];
    init();
    function addContact() {
        var name = $('#inputName').val();
        var email = $('#inputEmail').val();
        var phone = $('#inputPhone').val();
        var myContact = new app.Classes.Contact(name, email, phone);
        contacts.push(myContact);
        $('#contactTable').append(drawTableRow(myContact));
        $('#inputName').val('');
        $('#inputEmail').val('');
        $('#inputPhone').val('');
    }
    app.addContact = addContact;
    function deleteContact(index) {
        contacts.splice(index, 1);
        init();
    }
    app.deleteContact = deleteContact;
    function drawTableRow(contact) {
        return "<tr>\n      <td>" + contact.name.toUpperCase() + "</td>\n      <td>" + contact.email + "</td>\n      <td>" + contact.phone + "</td>\n      <td style=\"text-align: center;\">\n        <button class=\"btn btn-danger\" onclick=\"app.deleteContact(" + contacts.indexOf(contact) + ")\">Delete</button>\n      </td>\n    </tr>";
    }
    function init() {
        var elemString = '';
        contacts.forEach(function (c, index, array) {
            elemString += drawTableRow(c);
        });
        $('#contactTable').html(elemString);
    }
})(app || (app = {}));
