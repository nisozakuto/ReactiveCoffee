class CoffeeOrdersController < ApplicationController
    def index
        coffeeorders = CoffeeOrder.all
        render json: {coffeeorders: coffeeorders}
    end

    def show
        coffeeorder =  CoffeeOrder.find(params[:id])
        render json: {coffeeorder: coffeeorder}
    end
    
    def create
        coffeeorder = CoffeeOrder.create(coffeeorder_params)
        render json: {coffeeorder: coffeeorder}
    end

    private
    def coffeeorder_params
    end
end
