(function () {
  'use strict';

  angular.module('sky.confirmation')
    .controller('confirmationController', [
      'checkoutService',
      confirmationController
    ]);

  function confirmationController (
    checkoutService
  ) {
    var self = this;

    function getCheckoutData () {
      return checkoutService.getCheckoutData();
    }

    function init () {
      getCheckoutData()
        .then(function (data) {
          angular.extend(self, data);
        });
    }

    init();
  }

}());
