angular.module('graphAll')
.controller('NavCtrl', [
'$scope',
'$state',
'$window',
'Auth',
function($scope,$state, $window,Auth ){
	$scope.signedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;

  Auth.currentUser().then(function (user){
    $scope.user = user;
  });

  $scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:login', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:logout', function (e, user){
    $scope.user = {};
    $window.localStorage.clear();
    $state.go('home');

  });
  
}]);