# Reactive - Coffee README v0.1

Coffee order application built with 
- POSTGRESQL, 
- Ruby on Rails, 
- React JS.

### Description 
This is a Coffee order application where customers can choose from different coffees and order one or more.
The order should eventually go to the coffee shop or to the barista and be processed.

The full plan is to allow users make more edits througout the website, payment acceptance integration, Watch the orders progress and pick up the coffee.
On the coffee shop side, accept the order, process it and once it is ready, update it in the app.

### Heroku
You can visit the live version on heroku [here](https://reactive-coffee-staging.herokuapp.com/)

### DB Schema
[DB-Designer Page](https://dbdesigner.page.link/H4oAA5PXJoeVHj8w9)

### Wireframes
[Link](https://www.figma.com/file/RbdjFNpElvuWHeMOC6t3Ol/Untitled?node-id=0%3A1)

### User Stories
- Visitors can sign up to the app.
- Visitors and Users can browse the coffees.
- Users can log in to the app.
- Users can order a coffee.
- Users can delete their old orders. 
- Users can visit their old orders and view them.


### HTTP Routes
- POST /users
- GET /profile
- POST /login
- POST /orders
- GET /orders
- POST /coffee_orders=
- GET /coffee_orders
- GET /coffees
- DELETE /orders/:id
- PUT /orders/

### Specs
Technologies use: 
- React JS
- PSQL
- User Auth
- Pexel's API for homepage pictures

### Contributers
This is an open soure coffee order app, the creators of this app would love to see PRs.
Feel free to create issues or own them to contribute.


### Used resources
- To seed data: [Faker](https://github.com/faker-ruby/faker/blob/master/doc/default/coffee.md)

Useful resources for the development
- https://dba.stackexchange.com/questions/1285/how-do-i-list-all-databases-and-tables-using-psql
- https://stackoverflow.com/questions/8627156/adding-default-true-to-boolean-in-existing-rails-column
- https://stackoverflow.com/questions/2831059/how-to-drop-columns-using-rails-migration
- https://stackoverflow.com/questions/4834809/adding-a-column-to-an-existing-table-in-a-rails-migration/4834906
- https://git.generalassemb.ly/EC-SEI-JULY6/w11_d04_LEC-Rails-React/blob/main/commands.md