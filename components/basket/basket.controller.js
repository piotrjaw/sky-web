(function () {
  'use strict';

  angular.module('sky.basket')
    .controller('basketController', [
      '$scope',
      '$state',
      'checkoutService',
      basketController
    ]);

  function basketController (
    $scope,
    $state,
    checkoutService
  ) {
    var self = this;

    self.checkout = function (catalogue, customerId) {
      checkoutService.setCheckoutData(catalogue, customerId)
        .then(goToConfirmation);
    };

    function goToConfirmation () {
      $state.go('confirmation');
    }

    $scope.$watch(angular.bind(this, function () {
      return this.catalogue;
    }), function (newVal) {
      self.filteredCatalogue = _.filter(newVal, 'selected');
    }, true);

  }

}());
