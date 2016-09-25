namespace app.Classes {
  export class Animal implements app.Interfaces.IAnimal {

    constructor(
      public name: string,
      public type: string,
      public domest: boolean,
      public sound: string,
      public pred ?: boolean
    ){}
  }
}
