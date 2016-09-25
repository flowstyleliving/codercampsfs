namespace app.Controllers {
  export class HomeController {
    public title = "hello World!";
    public contact = {name: null, email: null, phoneNumber: null};
    public contacts: Array<any> = [];

    public createContact() {
      this.contacts.push(this.contact);
      this.contact = { name: null, email: null, phoneNumber: null};
    }

    public deleteContact(contact) {
      this.contacts.splice(this.contacts.indexOf(contact), 1);
    }
  }
  //angular.module('module_name') NO brackets gets the module
  //.controller('Controller Name), controllerFunction())
  angular.module('app').controller('HomeController', HomeController);
}
