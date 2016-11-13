Rails.application.routes.draw do
  devise_for :users

  get 'dashboards/index'
  get 'dashboards/families' => 'dashboards#families'

  root to: 'home#index'

end
