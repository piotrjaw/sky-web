(function () {
  'use strict';

  angular.module('sky.core')
    .factory('customerLocationService', [
      '$http',
      customerLocationService
    ]);

  function customerLocationService ($http) {
    function getCustomerLocation (customerId) {
      var url = 'http://localhost:3000/service/customerLocation?customerID=' + customerId;
      return $http.get(url);
    }

    return {
      getCustomerLocation: getCustomerLocation
    };
  }
}());
