class CoffeeOrder < ApplicationRecord
   belongs_to :coffee 
   belongs_to :order
   validates_uniqueness_of :order_id, :scope => :coffee_id
end
