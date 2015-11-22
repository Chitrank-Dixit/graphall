class AddResourceRefToWebs < ActiveRecord::Migration
  def change
    add_reference :webs, :resource, index: true, foreign_key: true
  end
end
