(function () {
  'use strict';

  angular.module('sky.basket')
    .directive('skyBasket', skyBasket);

  function skyBasket() {
    return {
      restrict: 'E',
      templateUrl: 'components/basket/views/basket.html',
      controller: 'basketController',
      controllerAs: 'basket',
      bindToController: {
        catalogue: '=',
        customerId: '='
      }
    };
  }
}());
