namespace app.Interfaces {
  export interface IAnimal {
    name: string;
    type: string;
    domest: boolean;
    sound: string;
    pred ?: boolean;
  }
}
