(function () {
  'use strict';

  angular.module('sky.mainPage')
    .directive('skyMainPage', skyMainPage);

  function skyMainPage () {
    return {
      restrict: 'E',
      templateUrl: 'components/mainPage/views/mainPage.html',
      controller: 'mainPageController',
      controllerAs: 'main'
    };
  }
}());
