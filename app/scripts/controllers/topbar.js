'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:TopbarCtrl
 * @description
 * # TopbarCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('TopbarCtrl', function ($scope, $location) {
    $scope.isActive = function(view){
      console.log("isActive");
      return $location.path() === view
    }
  });
