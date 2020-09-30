Rails.application.routes.draw do
  post "/login" => "sessions#create"
  delete "/logout" => "sessions#destroy"
  get "/profile" => "users#profile"
  resources :coffees
  resources :coffee_orders
  resources :orders
  # resources :orders, only: [:index, :show, :create, :update, :delete]
  resources :users, only: [:show, :create, :update]
end
