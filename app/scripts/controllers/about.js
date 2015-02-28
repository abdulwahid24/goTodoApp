'use strict';

/**
 * @ngdoc function
 * @name goTodoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the goTodoAppApp
 */
angular.module('goTodoAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
