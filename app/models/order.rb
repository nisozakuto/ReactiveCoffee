class Order < ApplicationRecord
    has_many :coffees, through: :coffee_orders
end
