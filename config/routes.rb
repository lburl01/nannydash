Rails.application.routes.draw do
  devise_for :users

  # Angular entry point
  get 'dashboard' => 'dashboard#index'

  get 'api/v1/sitters' => 'sitters#index'

  get 'api/v1/families' => 'families#index'
  patch 'api/v1/family/:id' => 'families#toggle_active_family'

  get 'agency/index' => 'agency#index'
  get 'agency/new' => 'agency#new'
  post 'agency' => 'agency#create'

  root to: 'home#index'

end
