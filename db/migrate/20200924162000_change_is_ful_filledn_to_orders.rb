class ChangeIsFulFillednToOrders < ActiveRecord::Migration[6.0]
  def change
    remove_column :orders, :isFulFilled
    add_column :orders, :isFulFilled, :boolean, default: false
  end
end
