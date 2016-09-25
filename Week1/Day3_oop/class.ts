namespace shiza {
  export let myvar = 5;


//namespace is a fancy object
// gets code off the Global_Scope

//Classes = ObjectConstructors

class Dog {
  public name = "Rex";
  private SSN = "hahaha";
  public age: number;
  public breed;
  public tracker;

  // When we want to pass it a parameter, we must use this constructor()
  constructor(
    age: number,
    public owner: string,
    // Default Param
    public numLegs: number = 4,
    // Optional Param // You may want it but it's okay if not
    public collarColor ?: string
    ) {
    this.age = age;
  }
}

let myDog = new Dog(5, "Jeremy");
myDog.name
// myDog.SSN
myDog.age = 15;

}
