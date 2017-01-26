myApp.controller("dashboardCtrl", ["$scope", "$cookies", function ($scope, $cookies) {
    var myFavorite = $cookies.get("userObj");
    var allcookies = $cookies.getAll();
    console.log(myFavorite);
    console.log(allcookies);
}]);