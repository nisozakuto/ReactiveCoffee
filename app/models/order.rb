class Order < ApplicationRecord
    has_many :coffee_orders
    has_many :coffees, through: :coffee_orders
    belongs_to :user
end
