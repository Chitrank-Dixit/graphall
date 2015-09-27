class GraphsController < ApplicationController
	before_filter :authenticate_user!, only: [:create, :edit, :delete]
	  

	def index
		respond_with Graph.all
	end

	def create
		respond_with Graph.create(graph_params.merge(user_id: current_user.id))
	end

	def show
		respond_with Graph.find(params[:id])
	end

	def edit
		graph = Graph.find(params[:id])
		#puts graph_params, graph
		#graph.increment!(:upvotes)
		puts params
		respond_with graph.update(graph_params)
	end

	def delete
		graph = Graph.find(params[:id])
		graph.destroy
		
	end

	private

	def graph_params
		params.require(:graph).permit(:name, :description,:graph_type,:access_type)
	end
end
