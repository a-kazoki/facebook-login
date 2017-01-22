myApp.controller("dashboardCtrl", ["$scope", "$cookieStore", function ($scope, $cookieStore) {
    var userObj = $cookieStore.get("userObj");
    console.log(userObj);
}]);