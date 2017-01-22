myApp.factory("authFact", ["$cookies", function ($cookies) {
    var authFact = {};
    authFact.setAccessToken = function (accessToken) {
        $cookies.put("accesToken", accessToken);
    };
    authFact.getAccessToken = function () {
        authFact.authToken = $cookies.get("accessToken");
        return authFact.authToken;
    };
    
    return authFact;
}]);