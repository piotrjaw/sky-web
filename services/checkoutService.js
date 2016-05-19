(function () {
  'use strict';

  angular.module('sky.core')
    .factory('checkoutService', [
      '$q',
      checkoutService
    ]);

  function checkoutService (
    $q
  ) {
    var self = this;

    function setCheckoutData (catalogue, customerId) {
      self.catalogue = catalogue;
      self.customerId = customerId;
      return $q.when()
    }

    function getCheckoutData () {
      return $q.when({
        catalogue: self.catalogue,
        customerId: self.customerId
      });
    }

    return {
      setCheckoutData: setCheckoutData,
      getCheckoutData: getCheckoutData
    };
  }
}());
