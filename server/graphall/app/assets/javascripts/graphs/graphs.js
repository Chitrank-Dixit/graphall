angular.module('graphAll')
.factory('graphs', ['$http',function($http){
	var o = {
		graphs: []
	};
	o.getAll = function() {
	    return $http.get('/graphs.json').success(function(data){
	      angular.copy(data, o.graphs);
	    });
  	};

  	o.create = function(graph, type) {
	  return $http.post('/graphs.json', graph, type).success(function(data){
	    o.graphs.push(data);
	    return data;
	  });
	};

	o.edit = function(graph, id) {
		return $http.put('/graphs/' + id + '/edit.json', graph, graph.graph_type).success(function(data){
	       console.log(data);
        });
	}

	o.get = function(id) {
	  return $http.get('/graphs/' + id + '.json').then(function(res){
	    return res.data;
	  });
	};

	o.delete = function(id, type) {
	  return $http.delete('/graphs/'+ id + '.json').then(function(res){
		return res.data;
	  });
	};

	o.addPieChart = function(id, piechart){
		return $http.post('/graphs/' + id + '/pie_charts.json', piechart);
	};

	o.getPieChart = function(id, piechart){
	    return $http.get('/graphs/' + id + '/pie_charts.json').then(function(res){
	    	return res.data;
	  	});
	};
	o.editPieChart = function(id, piechart){
		return $http.put('/graphs/' + id + '/pie_charts/'+ piechart.id + '/edit.json', piechart);
	};
	o.deletePieChart = function(id, piechart) {
		return $http.delete('/graphs/' + id +'/pie_charts/' + piechart.id + '/delete.json', piechart);
	};

	


	return o;

  
}]);