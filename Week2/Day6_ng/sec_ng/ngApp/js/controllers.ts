namespace app.Controllers {
  export class HomeController {
    public animals: Array<any>;

    constructor(private AnimalService: app.Services.AnimalService) {
      this.animals = AnimalService.getAnimals();
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
