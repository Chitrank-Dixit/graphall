class CreatePieCharts < ActiveRecord::Migration
  def change
    create_table :pie_charts do |t|
      t.string :name
      t.float :value

      t.timestamps null: false
    end
  end
end
