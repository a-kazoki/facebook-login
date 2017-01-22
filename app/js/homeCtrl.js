myApp.controller("homeCtrl", ["$scope", "authFact", "$location", "$cookieStore", function ($scope, authFact, $location, $cookieStore) {
    $scope.name = "Login Please";
    $scope.FBLogin = function () {
        FB.login(function (response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function (response) {
                    console.log('Good to see you, ' + response.name + '.');
                    console.log(response);
                    $cookieStore.put("userObj", response);
                    var accessToken = FB.getAuthResponse().accessToken;
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