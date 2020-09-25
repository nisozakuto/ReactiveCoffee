class UsersController < ApiController
    before_action :require_login, except: [:create]

    def create
      user = User.create!(user_params)
      render json: { token: user.auth_token }
    end
  
    def profile
      user = User.find_by!(auth_token: request.headers[:token])
      user_orders = user.orders
      unfulfilled_order = user_orders.find{|order| order.isFulFilled == false}
      # .find{ |order| order[:isFulfilled] == false }
      # unfulfilled_order = user_orders.find{ isFulfilled: false }
      render json: { user: { username: user.username, email: user.email, name: user.name }, orders:user_orders, active_order: unfulfilled_order }
    end
  
    private
    def user_params
      params.require(:user).permit(:username, :password,  :email, :name)
    end
  

end
