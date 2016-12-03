'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ArticlesCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http({
      url: 'http://localhost:8888/wordpress/wp-json/wp/v2/posts?_embed'
    }).success(function(data) {
      $scope.articles = data;
      console.log($scope.articles);
    })
  });
