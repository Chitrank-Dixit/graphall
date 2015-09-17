class PieChart < ActiveRecord::Base
	belongs_to :user
	belongs_to :graph
end
