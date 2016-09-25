namespace app.Classes {
  export class Contact implements app.Interfaces.IContact {

    constructor(
      public name: string,
      public email: string,
      public phone: string
    ) {}
  }
}
