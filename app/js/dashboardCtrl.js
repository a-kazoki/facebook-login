myApp.controller("dashboardCtrl", ["$scope", "$location", "$cookies", function ($scope, $location, $cookies) {
    var favoriteCookie = $cookies.get('userid');
    $scope.theid = favoriteCookie;
    var allcookies = $cookies.getAll();
    console.log(favoriteCookie);
    console.log(allcookies);
    
    $scope.logout = function () {
        $location.path("/");
        $cookies.remove("accessToken");
        $cookies.remove("userid");
        $scope.theid = "you are not loged in";
    };
}]);