class AddGraphRefToPieCharts < ActiveRecord::Migration
  def change
    add_reference :pie_charts, :graph, index: true, foreign_key: true
  end
end
