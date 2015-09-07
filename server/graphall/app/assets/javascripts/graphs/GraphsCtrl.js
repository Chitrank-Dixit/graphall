angular.module('graphAll')
.controller('GraphsCtrl', [
'$scope',
function($scope){

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

    $scope.inputs = [];

    $scope.data = [];

    

    $scope.setGraph =  function() {
        console.log("Graph is", $scope.graph_type);
        if($scope.graph_type === 1)
        {

        }
        else if($scope.graph_type === 2)
        {

        }
        else if($scope.graph_type === 3)
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
        else
        {
            console.log("Invalid Graph Type");
        }
    };

    $scope.addNameVal = function() {
        $scope.inputs.push({});
    };

    $scope.addtoNameValQueue= function(pieslice) {
        console.log(pieslice.name, pieslice.value);
        var pie_slice = {
            key: pieslice.name,
            y: pieslice.value
        };
        $scope.data.push(pie_slice);
    };



    

        // $scope.data = [
        //     {
        //         key: "One",
        //         y: 8
        //     },
        //     {
        //         key: "Two",
        //         y: 2
        //     },
        //     {
        //         key: "Three",
        //         y: 9
        //     },
        //     {
        //         key: "Four",
        //         y: 7
        //     },
        //     {
        //         key: "Five",
        //         y: 4
        //     },
        //     {
        //         key: "Six",
        //         y: 3
        //     },
        //     {
        //         key: "Seven",
        //         y: .5
        //     }
        // ];

}]);
