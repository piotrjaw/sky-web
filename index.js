(function () {
  'use strict';

  angular.module('app', ['ngMaterial', 'ngCookies', 'ui.router'])
    .config(config)
    .run(run);

  function config ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/productSelection');

    $stateProvider
      .state('productSelection', {
        url: '/productSelection',
        templateUrl: 'components/productSelection/views/index.html'
      })
      .state('confirmation', {
        url: '/confirmation',
        templateUrl: 'components/confirmation/views/index.html'
      });
  }

  function run ($cookies) {
    $cookies.put('customerId', Math.round(Math.random()*100));
  }

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app', 'sky.mainPage', 'sky.productSelection', 'sky.confirmation', 'sky.basket', 'sky.core']);
  });


}());
