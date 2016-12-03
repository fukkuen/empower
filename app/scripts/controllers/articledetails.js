'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ArticledetailsCtrl
 * @description
 * # ArticledetailsCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ArticledetailsCtrl', function ($scope, $http, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http({
      url: 'http://localhost:8888/wordpress/wp-json/wp/v2/posts/'+$routeParams.id
    }).success(function(data) {
      $scope.story = data;
      console.log($scope.story);
    })
  });
