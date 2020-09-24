class AddLargeUrlToCoffees < ActiveRecord::Migration[6.0]
  def change
    add_column :coffees, :short_url, :string
    add_column :coffees, :large_url, :string
    remove_column :coffees, :url
  end
end
