class AddColumnToCoffees < ActiveRecord::Migration[6.0]
  def change
    add_column :coffees, :url, :string
  end
end
