angular.module('graphAll')
.controller('DeleteGraphCtrl', [
'$scope',
'$window',
'graphs',
'graph',

function($scope,  $window ,graphs, graph){

    // get user data
    $scope.getUserData = function(arg) {
        var userdata = JSON.parse($window.localStorage.getItem('user_data'));
        $scope.userdata = userdata[arg];
        console.log($scope.userdata);
        return userdata[arg]
    }
    
    
    console.log("user data is: ", $scope.userdata);

    console.log(graph);
    /* Chart options */
    //$scope.options = { /* JSON data */ };

    /* Chart data */
    //$scope.data = { /* JSON data */ }
    $scope.graph_types = [
        { name: 'Pie Chart', id: 3},
        { name: 'Line Graph',id: 1}, 
        { name: 'Bar Chart', id: 2}
    ];


    // add Name/Value dynamically code

    

    $scope.data = [];

    

    
    // view Graph

    $scope.graph = graph;
    console.log($scope.graph);
    $scope.getGraph = function() {
        console.log("In it", $scope.graph.graph_type);
        if($scope.graph.graph_type === "1")
        {

        }
        else if($scope.graph.graph_type === "2")
        {

        }
        else if($scope.graph.graph_type === "3")
        {
          //$scope.data= $scope.graph.pie_charts;  
          for (var item in $scope.graph.pie_charts) 
          {
            console.log(item);
            var pairs = {
                key: $scope.graph.pie_charts[item].name,
                y: $scope.graph.pie_charts[item].value
            }; 
            $scope.data.push(pairs);
          }
          console.log($scope.data);
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
        
    };

    $scope.deleteGraph = function() {
        if(graph.graph_type === "1")
        {

        }
        else if(graph.graph_type === "2")
        {

        }
        else if(graph.graph_type === "3")
        {
            graphs.deletePieChart(graph.id);
            graphs.delete(graph.id, graph.graph_type).success(function(data){
                console.log("graph deleted now");
            });
        }
    };

    $scope.donotdelete = function(graph) {
        // $state.go()
    };
    
    


}]);
