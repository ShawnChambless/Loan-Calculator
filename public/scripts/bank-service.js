var app = angular.module('LoanCalculator');

app.service('bankService', function($http) {

    this.getInterest = function() {
        return $http({
            method: 'GET',
            url: '/interest_rate'
        });
    };

});
