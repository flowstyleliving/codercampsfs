namespace app.Services {
  interface IGirlResource extends ng.resource.IResource<IGirlResource>, app.i.IGirl {};
  interface IGirlClass extends ng.resource.IResourceClass<IGirlResource> {
    // update(params: Object, body: Object);
  }

  export class GirlService {
    private GirlResource: IGirlClass;

    public getAll() {
      return this.GirlResource.query();

    }

    public createGirl(girl: app.i.IGirl) {
      console.log("meow")
      return this.GirlResource.save(girl).$promise;
    }

    constructor(private $resource: ng.resource.IResourceService) {
      this.GirlResource = <IGirlClass>$resource('/api/v1/girls/:id', null, {
          'update': {method: 'PUT'}
        }
    )};
  }
  angular.module('app').service('GirlService', GirlService);
}
