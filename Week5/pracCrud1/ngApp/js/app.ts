'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $httpProvider: ng.IHttpProvider
  ) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    }).state('createGirl', {
      url: '/create',
      templateUrl: '/templates/createGirl.html',
      controller: 'GirlCreateController',
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
