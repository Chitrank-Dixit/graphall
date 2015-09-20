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

	// o.upvote = function(graph) {
	//   return $http.put('/graphs/' + graph.id + '/upvote.json')
	//     .success(function(data){
	//       graph.upvotes += 1;
	//     });
	// };

	o.edit = function(id, type) {
		return $http.put('/graphs/' + graph.id + '/upvote.json')
	     .success(function(data){
	       graph.upvotes += 1;
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
	// o.addComment = function(id, comment) {
	//   return $http.post('/graphs/' + id + '/comments.json', comment);
	// };

	// o.upvoteComment = function(graphs, comment) {
	//   return $http.put('/graphs/' + post.id + '/graphs/'+ comment.id + '/upvote.json')
	//     .success(function(data){
	//       comment.upvotes += 1;
	//     });
	// };

	


	return o;

  
}]);