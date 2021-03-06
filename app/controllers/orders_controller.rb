class OrdersController < ApiController
    # before_action :require_login, except: [:index, :show]
    before_action :require_login

    def index 
        orders = Order.where(params[:user_id] == current_user)
        render json: {orders: orders}
    end
    
    def checkisFulfilled
        order = User.find_by!(auth_token: request.headers[:token])        
        render json: {order: order}
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
        order = Order.find(params[:id]) 
        order.isFulFilled = order_params
        order.save
    end

    def destroy
        order = Order.find(params[:id])
        order.destroy
        head :ok
    end

    private
    def order_params
        params.require(:order).permit(:user_id, :isFulFilled)
    end        
end
