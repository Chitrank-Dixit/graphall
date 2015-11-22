class AddPlanRefToResources < ActiveRecord::Migration
  def change
    add_reference :resources, :plan, index: true, foreign_key: true
  end
end
