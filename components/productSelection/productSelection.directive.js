(function () {
  'use strict';

  angular.module('sky.productSelection')
    .directive('productSelection', productSelection);

  function productSelection () {
    return {
      restrict: 'E',
      templateUrl: 'components/productSelection/views/productSelection.html',
      controller: 'productSelectionController',
      controllerAs: 'productSelection',
      bindToController: {
        customerId: '='
      }
    };
  }

}());
