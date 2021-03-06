class User < ApplicationRecord
    validates :username, uniqueness: true

    has_secure_password
    has_secure_token :auth_token

    has_many :orders
    
    def self.validate_login(username, password)
        user = find_by(username: username)
        if  user && user.authenticate(password)
           user
        end 
    end
    
    def invalidate_token
        self.update(auth_token: nil)
    end

    def profile_info
        {user: {username: self.username, email: self.email, name:self.name, orders: self.orders}}
    end
end
