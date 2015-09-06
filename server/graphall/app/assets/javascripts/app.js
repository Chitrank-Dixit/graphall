angular.module('graphAll', ['ui.router', 'templates', 'Devise','nvd3'])
.config([
'$stateProvider',
'$urlRouterProvider',
'$locationProvider',
function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('nav', {
      url: '/nav',
      templateUrl: 'nav/_nav.html',
      controller: 'NavCtrl'

    })
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      resolve: {
        postPromise: ['posts', function(posts){
        return posts.getAll();
        }]
      }
    })

    .state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html',
      controller: 'PostsCtrl',
      resolve: {
        post: ['$stateParams', 'posts', function($stateParams, posts) {
        return posts.get($stateParams.id);
        }]
      }
    })

    .state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          })
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    })
    .state('create_graph', {
      url: '/create_graph',
      templateUrl: 'graphs/_graphs.html',
      controller: 'GraphsCtrl',
      /*onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]*/
    });

    $urlRouterProvider.otherwise('home');

  
}]);


