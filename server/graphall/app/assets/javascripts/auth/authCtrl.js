angular.module('graphAll')
.controller('AuthCtrl', [
'$scope',
'$state',
'$window',
'Auth',

function($scope, $state, $window, Auth){
  $scope.login = function() {
    Auth.login($scope.user).then(function(data){
      $scope.userdata = data;
      $window.localStorage.setItem('user_data', JSON.stringify(data));
      $state.go('home');
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(data){
      $scope.userdata = data;
      $window.localStorage.setItem('user_data', JSON.stringify(data));
      $state.go('home');
    });
  };
  
}]);