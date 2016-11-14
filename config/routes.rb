Rails.application.routes.draw do
  devise_for :users

  get 'agency/index'
  get 'agency/families' => 'agency#families'
  get 'agency/new' => 'agency#new'
  post 'agency' => 'agency#create'

  root to: 'home#index'

end
