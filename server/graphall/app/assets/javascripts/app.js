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
        }],
        graphPromise: ['graphs', function(graphs){
          return graphs.getAll();
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
      url: '/graphs/create',
      templateUrl: 'graphs/_create_graph.html',
      controller: 'CreateGraphCtrl',
      /*onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]*/
    })
    .state('view_graph', {
      url: '/graphs/{id}',
      templateUrl: 'graphs/_view_graph.html',
      controller: 'ViewGraphCtrl',
      resolve: {
        graph: ['$stateParams', 'graphs', function($stateParams, graphs) {
        return graphs.get($stateParams.id);
        }]
      }
    })
    .state('delete_graph', {
      url: '/graphs/delete/{id}',
      templateUrl: 'graphs/_delete_graph.html',
      controller: 'DeleteGraphCtrl',
      resolve: {
        graph: ['$stateParams', 'graphs', function($stateParams, graphs) {
        return graphs.get($stateParams.id);
        }]
      }
    })
    .state('edit_graph', {
      url: '/graphs/edit/{id}',
      templateUrl: 'graphs/_edit_graph.html',
      controller: 'EditGraphCtrl',
      resolve: {
        graph: ['$stateParams', 'graphs', function($stateParams, graphs) {
        return graphs.get($stateParams.id);
        }]
      }
    });

    $urlRouterProvider.otherwise('home');

  
}]);


