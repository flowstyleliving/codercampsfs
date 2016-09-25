namespace app.Services {
  export class MovieService {
    private MovieResource;

    public getMovies() {
      return this.MovieResource.query();
    }
    constructor(private $resource: ng.resource.IResourceService) {
      //$resourcce('url')
      //// url for this api is /api/movies //:id
      this.MovieResource = $resource('/api/movies');
    }
  }
  angular.module('app').service('MovieService', MovieService);
}
