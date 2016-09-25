namespace app.Services {
  export class AnimalService {
    private AnimalResource;

    public getAnimals() {
      return this.AnimalResource.query();
    }
    constructor(private $resource: ng.resource.IResourceService) {
      this.AnimalResource = $resource(/api/deepThought/fortune);
    }
  }
  angular.module('app').controller('HomeController', HomeController);
}
