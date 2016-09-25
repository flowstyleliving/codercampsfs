namespace app {
  class Computer {
    public model: string;
    public price: string;
    public os: string;
    constructor(
      model: string,
      price: string,
      os: string
    ) {
      if(!model) throw new Error("A model name is required!");
      else this.model = model;

      if(!price) throw new Error("A price is required!");
      else this.price = price;
    }
  }

  class Apple extends Computer {
    constructor(
      model: string,
      price: string,
      os: string
    ) {
      super(model, price, os);
    }
  }

  class Windows extends Computer {
    constructor(
      model: string,
      price: string,
      os: string
    ) {
      super(model, price, os);
    }
  }

  let obj1 = new Apple("Macbook Pro", "$3,500.00", "OSX Yosemite");
  let obj2 = new Apple("Macbook Pro", "$2,000.00", "OSX Mavericks");
  let obj3 = new Windows("Dell", "$544.89", "Windows 8.1");
  
}
