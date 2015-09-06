angular.module('graphAll')
.controller('GraphsCtrl', [
'$scope',
function($scope){

    /* Chart options */
    //$scope.options = { /* JSON data */ };

    /* Chart data */
    //$scope.data = { /* JSON data */ }
    $scope.graph_type = [
    	{ name: 'Pie Chart', id: 3},
    	{ name: 'Line Graph',id: 1}, 
     	{ name: 'Bar Chart', id: 2}
    ];

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

        $scope.data = [
            {
                key: "One",
                y: 5
            },
            {
                key: "Two",
                y: 2
            },
            {
                key: "Three",
                y: 9
            },
            {
                key: "Four",
                y: 7
            },
            {
                key: "Five",
                y: 4
            },
            {
                key: "Six",
                y: 3
            },
            {
                key: "Seven",
                y: .5
            }
        ];

}]);
