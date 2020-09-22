class Coffee < ApplicationRecord
    has_many :coffee_orders
    has_many :order, through: :coffee_orders
end
