myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home/login.html",
        controller : "homeCtrl"
    })
    .otherwise("/", {
        templateUrl : "views/home/homr.html",
        controller : "homeCtrl"
    })
}]);