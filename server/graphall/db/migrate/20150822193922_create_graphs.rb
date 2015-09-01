class CreateGraphs < ActiveRecord::Migration
  def change
    create_table :graphs do |t|
      t.string :name
      t.string :description
      t.string :graph_type
      t.string :access_type

      t.timestamps null: false
    end
  end
end
