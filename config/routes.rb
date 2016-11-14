Rails.application.routes.draw do
  devise_for :users

  get 'api/v1/sitters' => 'sitters#index'

  patch 'api/v1/family/:id' => 'families#toggle_active_family'

  get 'agency/index' => 'agency#index'
  get 'agency/families' => 'agency#families'
  get 'agency/new' => 'agency#new'
  post 'agency' => 'agency#create'

  root to: 'home#index'

end
