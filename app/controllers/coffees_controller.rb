class CoffeesController < ApplicationController
    def index
        coffees = Coffee.all
        # coffees = Coffee.where(:category => params[:id])
        render json: {coffees: coffees}
    end

    def show
        coffee = Coffee.find(params[:id])
        render json: {coffee: coffee}
    end

    def create 
        coffee = Coffee.create(coffee_params)
        render json: {coffee: coffee}
    end

    def update
        coffee = Coffee.find(params[:id])
        coffee.update(params.require(:coffee).permit(:name, :flavor, :category))
        # redirect_to cofees_path(@coffee)
    end

    def destroy
        coffee = Coffee.find(params[:id])
        coffee.destroy
        head :ok
    end

    private 
    def coffee_params
         params.require(:coffee).permit(:coffee, :flavor, :category)
    end
end
