'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('appApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl',
        controllerAs: 'articles'
      })
      .when('/articles/:id', {
        templateUrl: 'views/articledetails.html',
        controller: 'ArticledetailsCtrl',
        controllerAs: 'articleDetails'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl',
        controllerAs: 'team'
      })
      .when('/mission', {
        templateUrl: 'views/mission.html',
        controller: 'MissionCtrl',
        controllerAs: 'mission'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .filter('trust', function($sce) {
    return function(htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    }
  })
  .filter('trustUrl', function($sce) {
    return function(url) {
      return $sce.trustAsUrl(url);
    }
  })
  .filter('removeTime', function() {
    return function(string) {
      return string.split('T')[0];
    }
  });
