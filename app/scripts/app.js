'use strict';

/**
 * @ngdoc overview
 * @name goTodoAppApp
 * @description
 * # goTodoAppApp
 *
 * Main module of the application.
 */
angular
  .module('goTodoAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $resourceProvider) {

    $resourceProvider.defaults.stripTrailingSlashes = false;

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
