class AddUserRefToResources < ActiveRecord::Migration
  def change
    add_reference :resources, :user, index: true, foreign_key: true
  end
end
