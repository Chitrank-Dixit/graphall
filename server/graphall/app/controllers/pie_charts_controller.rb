class PieChartsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :upvote]
  
  def create
    graph = Graph.find(params[:graph_id])
    pie_chart = graph.pie_charts.create(pie_chart_params.merge(user_id: current_user.id))
    respond_with graph, pie_chart
  end

  def show
    graph = Graph.find(params[:graph_id])
    #pie_chart = 
  end

  # def edit
  # end

  # def delete
  # end

  # def upvote
  #   post = Post.find(params[:post_id])
  #   comment = post.comments.find(params[:id])
  #   comment.increment!(:upvotes)

  #   respond_with post, comment
  # end

  private
  def pie_chart_params
    params.require(:pie_chart).permit(:name, :value)
  end
end
