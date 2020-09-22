class AddColumnToCoffeeOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :coffee_orders, :order_id, :integer
    remove_column :orders, :coffees_order_id

  end
end
