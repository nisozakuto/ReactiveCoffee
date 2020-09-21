Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :coffees, shallow: true do
    resources :category
  end
  resources :coffee_orders do
    resources :coffees
  end

  resources :orders do
    resources :coffee_orders do
      resources :coffees
    end
  end

  get "/login" => "sessions#create"
  delete "/logout" => "sessions#destroy"
  get "/profile" => "user#profile"
  resources :users, only: [:show, :create, :update]
  
end
