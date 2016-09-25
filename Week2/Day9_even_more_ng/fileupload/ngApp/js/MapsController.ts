namespace app.Controllers {
  export class MapsController {
    public center = this.geo;
    public zoom = 15;
    public geo;
    public geolocation;
    public markers = [
            {
                id: 0,
                options: {
                    title: 'Seattle Coder Camps',
                },
                latitude: 47.671853,
                longitude: -122.121328
            },
            {
                id: 1,
                options: {
                    title: 'Houston Coder Camps',
                },
                latitude: 29.552561,
                longitude: -95.395219
            },
            {
                id: 3,
                options: {
                    title: 'San Francisco Coder Camps',
                },
                latitude: 37.809499,
                longitude: -122.253665
            }
        ];



  constructor(private $scope: geolocation) {
    $scope.coords = geolocation.getLocation().then(function(data){
     navigator = {lat:data.coords.latitude, long:data.coords.longitude};
     return navigator;
  });
}

}
  angular.module('app').controller('MapsController', MapsController);

}
