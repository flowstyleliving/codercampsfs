namespace app.Controllers {
  export class GirlCreateController {
    public girl: app.i.IGirl;

    public create(girl: app.i.IGirl) {
      this.GirlService.createGirl(this.girl).then((res) => {
        this.$state.go('Home');
      })
    }

    constructor(
      private GirlService: app.Services.GirlService,
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService
    ) {}
  }
  angular.module('app').controller('GirlCreateController', GirlCreateController);
}
