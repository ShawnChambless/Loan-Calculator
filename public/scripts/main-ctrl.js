var app = angular.module('LoanCalculator');

app.controller('MainCtrl', function($scope, bankService) {

    bankService.getInterest().then(function(response) {
        console.log(response.data.interest_rate);
        $scope.interest_rate = response.data.interest_rate*100;
    });

  $scope.calculatePayment = function() {
    $scope.monthly_payment = Math.round((((1+(($scope.interest_rate/100)*(48/12)))*$scope.principal)/12)*100)/100;
  }

});
