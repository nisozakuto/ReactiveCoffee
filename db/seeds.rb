# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#HOT COFFEES
Coffee.create(name:"Latte", flavor:"Espresso",category:"Hot Coffee", url:"https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_wide_1242")
Coffee.create(name:"Caffe Americano", flavor:"Espresso",category:"Hot Coffee", url:"https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242")
Coffee.create(name:"Blonde Roast", flavor:"Brewed",category:"Hot Coffee", url:"https://globalassets.starbucks.com/assets/abb4f97948c948c28ea2dcaf933c4f6b.jpg?impolicy=1by1_wide_1242")
Coffee.create(name:"Caffè Misto", flavor:"Brewed",category:"Hot Coffee", url:"")
Coffee.create(name:"Cappuccinos", flavor:"Cappuccinos",category:"Hot Coffee", url:"")
Coffee.create(name:"Espresso Shots", flavor:"Espresso",category:"Hot Coffee", url:"")
Coffee.create(name:"Flat Whites", flavor:"Ristretto",category:"Hot Coffee", url:"")
Coffee.create(name:"Caramel Macchiato", flavor:"Espresso",category:"Hot Coffee", url:"")
Coffee.create(name:"Mochas", flavor:"Espresso",category:"Hot Coffee", url:"")

#COLD COFFEES
Coffee.create(name:"Pumpkin Cream Cold Brew", flavor:"Pumpkin",category:"Cold Coffee")
Coffee.create(name:"Pumpkin Cream Nitro Cold Brew", flavor:"Nitro Cold Brew",category:"Cold Coffee")
Coffee.create(name:"Iced Caffè Americano", flavor:"Espresso",category:"Cold Coffee")
Coffee.create(name:"Iced Coffees", flavor:"Brewed",category:"Cold Coffee")
Coffee.create(name:"Iced Flat Whites", flavor:"Nitro",category:"Cold Coffee")
Coffee.create(name:"Iced Caramel Macchiato", flavor:"Caramel",category:"Cold Coffee")

#ORDERS
# Order.create("coffees_order_id":1)
Order.create(user_id:1)
Order.create(user_id:2)
Order.create(user_id:2)
Order.create(user_id:4)
Order.create(user_id:3)
Order.create(user_id:3)
Order.create(user_id:4)
Order.create(user_id:4)
Order.create(user_id:4)

#Users
User.create(username:"Batman", password:"avenger", email:"batman@gmail.com", name:"Batman")
User.create(username:"Superman", password:"avenger", email:"superman@gmail.com", name:"Superman")
User.create(username:"Thor", password:"avenger", email:"thor@gmail.com", name:"Thor")
User.create(username:"Hulk", password:"avenger", email:"hulk@gmail.com", name:"Hulk")
User.create(username:"IronMan", password:"avenger", email:"ironman@gmail.com", name:"IronMan")

