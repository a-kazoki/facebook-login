myApp.factory("authFact", [function () {
    var authFact = {};
    authFact.setAccessToken = function (accessToken) {
        authFact.authToken = accessToken;
    };
    authFact.getAccessToken = function () {
        authFact.authToken;
    };
    
    return authFact;
}]);