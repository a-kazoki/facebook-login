myApp.controller("dashboardCtrl", ["$scope", "$cookies", function ($scope, $cookies) {
    var favoriteCookie = $cookies.get('myFavorite');
    var allcookies = $cookies.getAll();
    console.log(favoriteCookie);
    console.log(allcookies);
}]);