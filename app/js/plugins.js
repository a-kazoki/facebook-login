// app js
var myApp = angular.module("myApp", ["ngRoute", "ngCookies"]);
window.fbAsyncInit = function () {
    FB.init({
        appId      : '395476837465709',
        xfbml      : true,
        version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
};
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//routes js
myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/home/login.html",
            controller : "homeCtrl"
        })
        .when("/dashboard", {
            templateUrl : "views/home/dashboard.html",
            controller : "dashboardCtrl",
            authenticated : true
        })
        .otherwise("/", {
            templateUrl : "views/home/home.html",
            controller : "homeCtrl"
        });
}]);
myApp.run(["$rootScope", "$location", "authFact", function ($rootScope, $location, authFact) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if (next.$$route.authenticated) {
            var userAuth = authFact.getAccessToken();
            if (!userAuth) {
                $location.path("/");
            }
        }
    });
}]);

//homeCtrl js
myApp.controller("homeCtrl", ["$scope", "authFact", "$location", "$cookies", function ($scope, authFact, $location, $cookies) {
    $scope.name = "Login Please";
    $scope.FBLogin = function () {
        FB.login(function (response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me' , {fields: 'id,name,email,picture'}, function (response) {
                    console.log('Good to see you, ' + response.name + '.');
                    console.log(response);
                    $cookies.put('userid', response.id);
                    $cookies.put('pic', response.picture.data.url);
                    var accessToken = FB.getAuthResponse().accessToken;
                    console.log(accessToken);
                    authFact.setAccessToken(accessToken);
                    $location.path("/dashboard");
                    $scope.$apply();
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    };
}]);

//authFact js
myApp.factory("authFact", ["$cookies", function ($cookies) {
    var authFact = {};
    authFact.setAccessToken = function (accessToken) {
        $cookies.put("accessToken", accessToken);
    };
    authFact.getAccessToken = function () {
        authFact.authToken = $cookies.get("accessToken");
        return authFact.authToken;
    };
    return authFact;
}]);

//dashboardCtrl js
myApp.controller("dashboardCtrl", ["$scope", "$location", "$cookies", function ($scope, $location, $cookies) {
    var favoriteCookie = $cookies.get('userid');
    var favorite1Cookie = $cookies.get('pic');
    $scope.theid = favoriteCookie;
    $scope.thepic = favorite1Cookie;
    var allcookies = $cookies.getAll();
    console.log(favoriteCookie);
    console.log(allcookies);
    
    $scope.logout = function () {
        $location.path("/");
        $cookies.remove("accessToken");
        $cookies.remove("userid");
        $scope.theid = "";
    };
}]);