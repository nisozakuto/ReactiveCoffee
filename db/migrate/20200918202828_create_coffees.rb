class CreateCoffees < ActiveRecord::Migration[6.0]
  def change
    create_table :coffees do |t|
      t.string :name
      t.string :flavor
      t.string :category

      t.timestamps
    end
  end
end
