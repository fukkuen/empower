'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('EventsCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http({
      url: 'http://localhost:8888/wordpress/wp-content/themes/twentysixteen/includes/json-feed.php',
      method: 'JSONP',
    }).success(function(data) {
      $scope.articles = data;
      console.log('event:' + $scope.events);
    }).error(function(err){
      console.log('err: ' + err);
    })
  });
