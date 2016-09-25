namespace app.Controllers {
  export class HomeController {
    public movies: Array<any>;

    constructor(private MovieService: app.Services.MovieService) {
      this.movies = MovieService.getMovies();
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
