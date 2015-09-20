angular.module('graphAll')
.controller('MainCtrl', [
'$scope',
'posts',
'graphs',
function($scope, posts, graphs){
  $scope.test = 'Hello world!';
  /*$scope.posts = [
	  {title: 'post 1', upvotes: 5},
	  {title: 'post 2', upvotes: 2},
	  {title: 'post 3', upvotes: 15},
	  {title: 'post 4', upvotes: 9},
	  {title: 'post 5', upvotes: 4}
  ];*/
  $scope.posts = posts.posts;
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0,
    comments: [
      {author: 'Joe', body: 'Cool post!', upvotes: 0},
      {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
    ]
  });

  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    posts.create({
      title: $scope.title,
      link: $scope.link,
    });
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    posts.upvote(post);
  };

  $scope.graphs = graphs.graphs;
  console.log($scope.graphs,posts, graphs);

  $scope.generateGraph = function(data, graph_type) {
    if(graph_type === 1)
    {

    }
    else if(graph_type === 2)
    {

    }
    else if(graph_type === 3)
    {
      
      $scope.options = {
                chart: {
                    type: 'pieChart',
                    height: 500,
                    x: function(d){return d.key;},
                    y: function(d){return d.y;},
                    showLabels: true,
                    transitionDuration: 500,
                    labelThreshold: 0.01,
                    legend: {
                        margin: {
                            top: 5,
                            right: 35,
                            bottom: 5,
                            left: 0
                        }
                    }
                }
            };
    }

  }  

}]);