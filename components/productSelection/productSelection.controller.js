(function () {
  'use strict';

  angular.module('sky.productSelection')
    .controller('productSelectionController', [
      'catalogueService',
      'customerLocationService',
      productSelectionController
    ]);

  function productSelectionController (
    catalogueService,
    customerLocationService
  ) {
    var self = this;

    function getCustomerLocation (customerId) {
      return customerLocationService.getCustomerLocation(customerId);
    }

    function getCatalogue (locationId) {
      return catalogueService.getCatalogue(locationId);
    }

    function init () {
      getCustomerLocation(self.customerId)
        .then(function (location) {
          return location.data.data;
        })
        .then(function (res) {
          if (res.error) {
            self.message = res.error;
          }
          return res;
        })
        .then(getCatalogue)
        .then(function (catalogue) {
          self.catalogue = catalogue.data.data;
        });
    }

    init();
  }

}());
