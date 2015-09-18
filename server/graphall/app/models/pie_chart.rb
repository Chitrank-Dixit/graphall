class PieChart < ActiveRecord::Base
	belongs_to :user
	belongs_to :graph

	def as_json(options = {})
		super(options.merge(include: :user))
	end
	
end
