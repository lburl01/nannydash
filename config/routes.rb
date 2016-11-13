Rails.application.routes.draw do
  devise_for :users

  get 'agency/index'
  get 'agency/families' => 'agency#families'

  root to: 'home#index'

end
