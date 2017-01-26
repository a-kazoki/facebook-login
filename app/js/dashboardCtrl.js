myApp.controller("dashboardCtrl", ["$scope", "$cookies", function ($scope, $cookies) {
    var userObj = $cookies.get("userObj");
    var allcookies = $cookies.getAll();
    console.log(userObj);
    console.log(allcookies);
}]);