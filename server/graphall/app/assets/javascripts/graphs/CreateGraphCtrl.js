angular.module('graphAll')
.controller('CreateGraphCtrl', [
'$scope',
'graphs',
'$state',
function($scope, graphs, $state){
    
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

    // disable is false till the button is clicked
    $scope.isDisabled = [];

    

    $scope.setGraph =  function() {
        console.log("Graph is", $scope.graph_type);
        if($scope.graph_type === 1)
        {
            $scope.options = {};
            $scope.data = [];
            $scope.options = {
            chart: {
                type: 'lineChart',
                height: 450,
                width: 500,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d){ return d.x; },
                y: function(d){ return d.y; },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function(e){ console.log("stateChange"); },
                    changeState: function(e){ console.log("changeState"); },
                    tooltipShow: function(e){ console.log("tooltipShow"); },
                    tooltipHide: function(e){ console.log("tooltipHide"); }
                },
                xAxis: {
                    axisLabel: 'Time (ms)'
                },
                yAxis: {
                    axisLabel: 'Voltage (v)',
                    tickFormat: function(d){
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: 30
                },
                callback: function(chart){
                    console.log("!!! lineChart callback !!!");
                }
            },
            // title: {
            //     enable: true,
            //     text: 'Title for Line Chart'
            // },
            // subtitle: {
            //     enable: true,
            //     text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
            //     css: {
            //         'text-align': 'center',
            //         'margin': '10px 13px 0px 7px'
            //     }
            // },
            // caption: {
            //     enable: true,
            //     html: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
            //     css: {
            //         'text-align': 'justify',
            //         'margin': '10px 13px 0px 7px'
            //     }
            // }
            };

            $scope.data = sinAndCos();

            /*Random Data Generator */
            function sinAndCos() {
                var sin = [],sin2 = [],
                    cos = [];

                //Data is represented as an array of {x,y} pairs.
                for (var i = 0; i < 100; i++) {
                    sin.push({x: i, y: Math.sin(i/10)});
                    sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
                    cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
                }

                //Line chart data should be sent as an array of series objects.
                return [
                    {
                        values: sin,      //values - represents the array of {x,y} data points
                        key: 'Sine Wave', //key  - the name of the series.
                        color: '#ff7f0e'  //color - optional: choose your own line color.
                    },
                    {
                        values: cos,
                        key: 'Cosine Wave',
                        color: '#2ca02c'
                    },
                    {
                        values: sin2,
                        key: 'Another sine wave',
                        color: '#7777ff',
                        area: true      //area - set to true if you want this line to turn into a filled area chart.
                    }
                ];
            };

        }
        else if($scope.graph_type === 2)
        {
            console.log($scope.graph_type);
            $scope.options = {};
            $scope.data = [];
            $scope.options = {
            chart: {
                type: 'historicalBarChart',
                height: 450,
                width: 500,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 50
                },
                x: function(d){return d[0];},
                y: function(d){return d[1]/100000;},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.1f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'X Axis',
                    tickFormat: function(d) {
                        return d3.time.format('%x')(new Date(d))
                    },
                    rotateLabels: 50,
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 35,
                    tickFormat: function(d){
                        return d3.format(',.1f')(d);
                    }
                }
                }
            };

            $scope.data = [
            {
                "key" : "Quantity" ,
                "bar": true,
                "values" : [ [ 1136005200000 , 1271000.0] , [ 1138683600000 , 1271000.0] , [ 1141102800000 , 1271000.0] , [ 1143781200000 , 0] , [ 1146369600000 , 0] , [ 1149048000000 , 0] , [ 1151640000000 , 0] , [ 1154318400000 , 0] , [ 1156996800000 , 0] , [ 1159588800000 , 3899486.0] , [ 1162270800000 , 3899486.0] , [ 1164862800000 , 3899486.0] , [ 1167541200000 , 3564700.0] , [ 1170219600000 , 3564700.0] , [ 1172638800000 , 3564700.0] , [ 1175313600000 , 2648493.0] , [ 1177905600000 , 2648493.0] , [ 1180584000000 , 2648493.0] , [ 1183176000000 , 2522993.0] , [ 1185854400000 , 2522993.0] , [ 1188532800000 , 2522993.0] , [ 1191124800000 , 2906501.0] , [ 1193803200000 , 2906501.0] , [ 1196398800000 , 2906501.0] , [ 1199077200000 , 2206761.0] , [ 1201755600000 , 2206761.0] , [ 1204261200000 , 2206761.0] , [ 1206936000000 , 2287726.0] , [ 1209528000000 , 2287726.0] , [ 1212206400000 , 2287726.0] , [ 1214798400000 , 2732646.0] , [ 1217476800000 , 2732646.0] , [ 1220155200000 , 2732646.0] , [ 1222747200000 , 2599196.0] , [ 1225425600000 , 2599196.0] , [ 1228021200000 , 2599196.0] , [ 1230699600000 , 1924387.0] , [ 1233378000000 , 1924387.0] , [ 1235797200000 , 1924387.0] , [ 1238472000000 , 1756311.0] , [ 1241064000000 , 1756311.0] , [ 1243742400000 , 1756311.0] , [ 1246334400000 , 1743470.0] , [ 1249012800000 , 1743470.0] , [ 1251691200000 , 1743470.0] , [ 1254283200000 , 1519010.0] , [ 1256961600000 , 1519010.0] , [ 1259557200000 , 1519010.0] , [ 1262235600000 , 1591444.0] , [ 1264914000000 , 1591444.0] , [ 1267333200000 , 1591444.0] , [ 1270008000000 , 1543784.0] , [ 1272600000000 , 1543784.0] , [ 1275278400000 , 1543784.0] , [ 1277870400000 , 1309915.0] , [ 1280548800000 , 1309915.0] , [ 1283227200000 , 1309915.0] , [ 1285819200000 , 1331875.0] , [ 1288497600000 , 1331875.0] , [ 1291093200000 , 1331875.0] , [ 1293771600000 , 1331875.0] , [ 1296450000000 , 1154695.0] , [ 1298869200000 , 1154695.0] , [ 1301544000000 , 1194025.0] , [ 1304136000000 , 1194025.0] , [ 1306814400000 , 1194025.0] , [ 1309406400000 , 1194025.0] , [ 1312084800000 , 1194025.0] , [ 1314763200000 , 1244525.0] , [ 1317355200000 , 475000.0] , [ 1320033600000 , 475000.0] , [ 1322629200000 , 475000.0] , [ 1325307600000 , 690033.0] , [ 1327986000000 , 690033.0] , [ 1330491600000 , 690033.0] , [ 1333166400000 , 514733.0] , [ 1335758400000 , 514733.0]]
            }];

        }
        else if($scope.graph_type === 3)
        {
            $scope.options = {};
            $scope.data = [];
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

    $scope.createGraph = function() {
        if($scope.graph_type === 1)
        {

        }
        else if($scope.graph_type === 2)
        {

        }
        else if($scope.graph_type === 3)
        {
            console.log("We are here");
            graphs.create({
              name: $scope.name,
              description: $scope.description,
              graph_type: $scope.graph_type,
              access_type: $scope.access_type
            }).success(function(data) {
                console.log("Data is ", data, $scope.data);
                for (var i=0;i<$scope.data.length;i++)
                {

                    console.log($scope.data[i].key, $scope.data[i].y);
                    var name = $scope.data[i]["key"];
                    var value = $scope.data[i]["y"];
                    console.log(name, value);
                    graphs.addPieChart(data.id, {
                        name: name,
                        value: value.toFixed(2),
                        author: 'user'
                    }).success(function(piecharts) {
                    //$scope.post.comments.push(comment);
                        console.log("Piecharts inserted" );
                    });
                }
                $state.go('home');
            });
            
        }
    };

    // for pie charts only 
    $scope.addNameVal = function() {
        $scope.inputs.push({index: 0});
        $scope.isDisabled = 0;
    };

    $scope.addSlice= function(pieslice, index) {
        console.log(pieslice.name, pieslice.value);
        var occurence = 0
        if($scope.data.length > 0)
        {
            for (var item in $scope.data)
            {
                console.log(item.key, pieslice.key, $scope.data)
                if($scope.data[item].key === pieslice.name)
                {
                    $scope.flash_message = 'Slice Already added';
                    console.log($scope.flash_message);
                    occurence = occurence + 1;
                    break;
                }
                
            }
            if (occurence ===0 )
            {
                var pie_slice = {
                    index: index,
                    key: pieslice.name,
                    y: pieslice.value
                };
                $scope.data.push(pie_slice);

            }
            
            
        }
        else
        {
            var pie_slice = {
                index: index,
                key: pieslice.name,
                y: pieslice.value
            };
            $scope.data.push(pie_slice);
            
        }
        
        $scope.isDisabled = index;
        pieslice.index = index;
        
        
    };


    $scope.editSlice = function(pieslice, index) {
        for (var item in $scope.data)
        {
            console.log($scope.data[item].key, $scope.data[item].y, pieslice["$$hashKey"] );
            if($scope.data[item].index === index)
            {
                //$scope.data.splice(item,1);
                //$scope.inputs.splice(item,1);
                //$scope.pieslice.name = '';
                //$scope.pieslice.value = 0;
                $scope.data[item].key = pieslice.name;
                $scope.data[item].y = pieslice.value;
            }
            
        }
    };

    $scope.removeSlice = function(pieslice) {
        //console.log(pieslice.name,pieslice, $scope.data, pieslice.name, pieslice.value);
        for (var item in $scope.data)
        {
            console.log($scope.data[item].key, $scope.data[item].y, pieslice["$$hashKey"] );
            if($scope.data[item].key === pieslice.name)
            {
                $scope.data.splice(item,1);
                $scope.inputs.splice(item,1);
                //$scope.pieslice.name = '';
                //$scope.pieslice.value = 0;
            }
            
        }
    };


    // view Graph

    // $scope.graph = graph;
    // console.log($scope.graph);
    // $scope.getGraph = function() {
    //     console.log("In it", $scope.graph.graph_type);
    //     if($scope.graph.graph_type === "1")
    //     {

    //     }
    //     else if($scope.graph.graph_type === "2")
    //     {

    //     }
    //     else if($scope.graph.graph_type === "3")
    //     {
    //       //$scope.data= $scope.graph.pie_charts;  
    //       for (var item in $scope.graph.pie_charts) 
    //       {
    //         console.log(item);
    //         var pairs = {
    //             key: $scope.graph.pie_charts[item].name,
    //             y: $scope.graph.pie_charts[item].value
    //         }; 
    //         $scope.data.push(pairs);
    //       }
    //       console.log($scope.data);
    //       $scope.options = {
    //                 chart: {
    //                     type: 'pieChart',
    //                     height: 500,
    //                     x: function(d){return d.key;},
    //                     y: function(d){return d.y;},
    //                     showLabels: true,
    //                     transitionDuration: 500,
    //                     labelThreshold: 0.01,
    //                     legend: {
    //                         margin: {
    //                             top: 5,
    //                             right: 35,
    //                             bottom: 5,
    //                             left: 0
    //                         }
    //                     }
    //                 }
    //             };
    //     }
        
    // };

    
    


}]);
