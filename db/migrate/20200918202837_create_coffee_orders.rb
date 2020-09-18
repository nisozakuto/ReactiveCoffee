class CreateCoffeeOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :coffee_orders do |t|
      t.integer :coffee_id
      t.integer :size
      t.integer :quantity
      
      t.timestamps
    end
  end
end
