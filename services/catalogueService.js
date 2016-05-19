(function () {
  'use strict';

  angular.module('sky.core')
    .factory('catalogueService', [
      '$http',
      catalogueService
    ]);

  function catalogueService ($http) {
    function getCatalogue (locationId) {
      var url = 'http://localhost:3000/service/catalogue?locationID=' + locationId;
      return $http.get(url);
    }

    return {
      getCatalogue: getCatalogue
    };
  }
}());
