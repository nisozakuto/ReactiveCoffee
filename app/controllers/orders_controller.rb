class OrdersController < ApiController
    # before_action :require_login, except: [:index, :show]
    before_action :require_login

    def index 
        # orders = Order.all
        orders = Order.where(params[:user_id] == current_user)
        render json: {orders: orders}
    end

    def show
        order = Order.find(params[:id])
        order_user = order.user
        render json: {order: order, username: order.user.username}
    end

    def create
        new_order = Order.new(order_params)
        new_order.user = current_user
        new_order.save 
        render json: {order: new_order}
    end
    
    def update
    end

    def destroy
        order = Order.find(params[:id])
        order.destroy
        head :ok
    end

    private
    def order_params
        params.require(:order).permit(:user_id, :coffees_order_id)
    end        
end
