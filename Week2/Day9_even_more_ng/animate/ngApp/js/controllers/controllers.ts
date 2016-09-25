namespace app.Controllers {

  export class HomeController {
    public guests: Array<app.Interfaces.IGuest> = [];
    public isLoading = true;

  public openModal(g: app.Interfaces.IGuest) {
    this.$uibModal.open({
      controller: 'GuestModalInstanceController as modal',
      templateUrl: '/templates/partials/guestbookMod.html',
      animation: true,
      resolve: {
        guests: g
      }
    })
  }

    public deleteGuest(guest: app.Interfaces.IGuest) {
      this.GuestService.delete(guest.id).then((res) => {
        this.guests.splice(this.guests.indexOf(guest), 1);
      }, (res) => {
        alert(res);
      });
    }

    constructor(
      private GuestService: app.Services.GuestService,
      private $timeout: ng.ITimeoutService,
      private $uibModal: ng.ui.bootstrap.IModalService
      ) {
      GuestService.getAllSync().then((res) => {
        for(let g of res) {
          g.dateCreated = Date.parse(g.dateCreated.toString());
          this.guests.push(g)
        }
        this.isLoading = false;
      })
    }
  }

  angular.module('app').controller('HomeController', HomeController);

  export class GuestModalInstanceController {
    public cancel() {
      this.$uibModalInstance.dismiss();
    }

    constructor(
      private guests: app.Interfaces.IGuest,
      private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance
    ) {

    }
  }
  angular.module('app').controller('GuestModalInstanceController', GuestModalInstanceController);
}
