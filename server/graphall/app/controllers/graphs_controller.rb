class GraphsController < ApplicationController
	before_filter :authenticate_user!, only: [:create, :edit]
	  

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
		#graph.increment!(:upvotes)
		respond_with graph
	end

	# def delete

	# end

	private

	def graph_params
		params.require(:graph).permit(:name, :description,:graph_type,:access_type)
	end
end
