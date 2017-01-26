myApp.controller("dashboardCtrl", ["$scope", "$cookies", function ($scope, $cookies) {
    var favoriteCookie = $cookies.get('userid');
    $scope.theid = favoriteCookie;
    var allcookies = $cookies.getAll();
    console.log(favoriteCookie);
    console.log(allcookies);
}]);