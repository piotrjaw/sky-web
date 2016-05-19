(function () {
  'use strict';

  angular.module('sky.mainPage')
    .controller('mainPageController', [
      '$cookies',
      mainPageController
    ]);

  function mainPageController (
    $cookies
  ) {
    var self = this;

    function init () {
      self.customerId = $cookies.get('customerId');
    }

    init();
  }
}());
