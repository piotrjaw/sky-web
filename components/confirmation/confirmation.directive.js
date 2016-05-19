(function () {
  'use strict';

  angular.module('sky.confirmation')
    .directive('skyConfirmation', skyConfirmation);

  function skyConfirmation() {
    return {
      restrict: 'E',
      templateUrl: 'components/confirmation/views/confirmation.html',
      controller: 'confirmationController',
      controllerAs: 'confirmation'
    };
  }
}());
