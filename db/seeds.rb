# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#HOT COFFEES
Coffee.create(name:"Latte", flavor:"Espresso",category:"Hot Coffee")
Coffee.create(name:"Caffe Americano", flavor:"Espresso",category:"Hot Coffee")
Coffee.create(name:"Blonde Roast", flavor:"Brewed",category:"Hot Coffee")
Coffee.create(name:"Caffè Misto", flavor:"Brewed",category:"Hot Coffee")
Coffee.create(name:"Cappuccinos", flavor:"Cappuccinos",category:"Hot Coffee")
Coffee.create(name:"Espresso Shots", flavor:"Espresso",category:"Hot Coffee")
Coffee.create(name:"Flat Whites", flavor:"Ristretto",category:"Hot Coffee")
Coffee.create(name:"Caramel Macchiato", flavor:"Espresso",category:"Hot Coffee")
Coffee.create(name:"Mochas", flavor:"Espresso",category:"Hot Coffee")

#COLD COFFEES
Coffee.create(name:"Pumpkin Cream Cold Brew", flavor:"Pumpkin",category:"Cold Coffee")
Coffee.create(name:"Pumpkin Cream Nitro Cold Brew", flavor:"Nitro Cold Brew",category:"Cold Coffee")
Coffee.create(name:"Iced Caffè Americano", flavor:"Espresso",category:"Cold Coffee")
Coffee.create(name:"Iced Coffees", flavor:"Brewed",category:"Cold Coffee")
Coffee.create(name:"Iced Flat Whites", flavor:"Nitro",category:"Cold Coffee")
Coffee.create(name:"Iced Caramel Macchiato", flavor:"Caramel",category:"Cold Coffee")

#ORDERS
Order.create("coffees_order_id":1)

