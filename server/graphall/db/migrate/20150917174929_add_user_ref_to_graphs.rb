class AddUserRefToGraphs < ActiveRecord::Migration
  def change
    add_reference :graphs, :user, index: true, foreign_key: true
  end
end
