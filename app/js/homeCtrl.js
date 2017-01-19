myApp.controller("homeCtrl", ["$scope", "authFact", "$location", function ($scope, authFact, $location) {
    $scope.name = "Login Please";
    $scope.FBLogin = function () {
        FB.login(function (response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function (response) {
                    console.log('Good to see you, ' + response.name + '.');
                    console.log(response);
                    var accessToken = FB.getAuthResponse();
                    console.log(accessToken);
                    authFact.setAccessToken(accessToken);
                    $location.path("/dashboard");
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    };
}]);