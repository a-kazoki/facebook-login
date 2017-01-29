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