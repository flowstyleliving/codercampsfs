'use strict';
namespace App {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: angular.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: angular.ui.IUrlRouterProvider) => {

    $urlRouterProvider.otherwise('/');
    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
    });

    $locationProvider.html5Mode(true);
  });
}
