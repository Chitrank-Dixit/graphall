class AddUserRefToPieCharts < ActiveRecord::Migration
  def change
    add_reference :pie_charts, :user, index: true, foreign_key: true
  end
end
