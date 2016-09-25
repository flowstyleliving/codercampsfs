namespace app {
  let contacts: Array<app.Interfaces.IContact> = [
    new app.Classes.Contact('Seo', 'flowstyleliving@gmail.com', '(720)-336-9736'),
    new app.Classes.Contact('Michael', 'mys628@gmail.com', '(720)-33-MYSEO')
  ];

  init();

  // FUNCTIONS below //

  //namespace is an object with addContact as a function
  export function addContact() {
    let name = $('#inputName').val();
    let email = $('#inputEmail').val();
    let phone = $('#inputPhone').val();

    let myContact = new app.Classes.Contact(name, email, phone);
    contacts.push(myContact);

    $('#contactTable').append(drawTableRow(myContact));

    //clear the inputs // .val() == insert value
    $('#inputName').val('');
    $('#inputEmail').val('');
    $('#inputPhone').val('');
  }

  export function deleteContact(index: number) {
    contacts.splice(index, 1);
    // redraw the contacts table w/ the selected_contact deleted
    init();
  }

  function drawTableRow(contact: app.Interfaces.IContact) {
    return `<tr>
      <td>${contact.name.toUpperCase()}</td>
      <td>${contact.email}</td>
      <td>${contact.phone}</td>
      <td style="text-align: center;">
        <button class="btn btn-danger" onclick="app.deleteContact(${contacts.indexOf(contact)})">Delete</button>
      </td>
    </tr>`;
    //" "
    //' '
    //` `
  }
  function init() {
    let elemString = ''; // c == item
    contacts.forEach((c, index, array) => {
      elemString += drawTableRow(c);
    });
    // document.getElementById('contactTable').innerHTML = elemString;
    $('#contactTable').html(elemString);
  }
}
