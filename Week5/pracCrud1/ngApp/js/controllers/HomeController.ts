namespace app.Controllers {
  export class HomeController {
    public girls: Array<app.i.IGirl>;

    constructor(
      private GirlService: app.Services.GirlService,
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService
    ) {
      this.girls = GirlService.getAll();
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
