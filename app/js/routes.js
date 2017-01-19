myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "views/home/login.html",
            controller : "homeCtrl"
        })
        .when("/", {
            templateUrl : "views/home/dashboard.html",
            controller : "dashboardCtrl",
            authenticated : true
        })
        .otherwise("/", {
            templateUrl : "views/home/home.html",
            controller : "homeCtrl"
        });
}]);

myApp.run(["$routeScope", "$location", "authFact", function ($routeScope, $location, authFact) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        console.log(event);
        console.log(next);
        console.log(current);
    });
}]);