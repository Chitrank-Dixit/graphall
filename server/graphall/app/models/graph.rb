class Graph < ActiveRecord::Base
	belongs_to :user
	has_many :pie_charts

	def as_json(options = {})
    	super(options.merge(include: [:user, pie_charts: {include: :user}]))
  	end
end
