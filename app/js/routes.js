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