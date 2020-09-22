Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :coffees, shallow: true do
  #   resources :category
  # end
  # resources :coffee_orders do
  #   resources :coffees
  # end
  # resources :orders do
  #   resources :coffee_orders do
  #     resources :coffees
  #   end
  # end

  post "/login" => "sessions#create"
  delete "/logout" => "sessions#destroy"
  get "/profile" => "users#profile"
  resources :coffees
  resources :coffee_orders
  resources :orders, only: [:index, :show, :create, :update]
  resources :users, only: [:show, :create, :update]
end
