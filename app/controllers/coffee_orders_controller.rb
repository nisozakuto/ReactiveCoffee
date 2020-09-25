class CoffeeOrdersController < ApplicationController
    def index
        coffeeorders = CoffeeOrder.all
        render json: {coffeeorders: coffeeorders}
    end

    def show
        coffeeorder =  CoffeeOrder.where(:order_id => params[:id])
        render json: {coffeeorder: coffeeorder}
    end
    
    def create
        coffeeorder = CoffeeOrder.create(coffeeorder_params)
        render json: {coffeeorder: coffeeorder}
    end

    private
    def coffeeorder_params 
        params.require(:coffee_orders).permit(:coffee_id, :size, :quantity, :order_id)
    end
end
