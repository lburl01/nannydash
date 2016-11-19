Rails.application.routes.draw do
  devise_for :users

  # Angular entry point
  get 'dashboard' => 'dashboard#index'

  get 'api/v1/sitters' => 'sitters#index'
  get 'api/v1/sitter/:id' => 'sitters#show'
  patch 'api/v1/sitter/:id' => 'sitters#update'
  patch 'api/v1/sitter/delete/:id' => 'sitters#toggle_deleted_sitter'
  patch 'api/v1/sitter/approve/:id' => 'sitters#toggle_approved_sitter'
  get 'sitter/new' => 'sitters#new'
  post 'sitter/new' => 'sitters#create'

  get 'api/v1/families' => 'families#index'
  get 'api/v1/family/:id' => 'families#show'
  patch 'api/v1/family/update/:id' => 'families#update'
  patch 'api/v1/family/:id' => 'families#toggle_active_family'
  patch '/api/v1/family/approved/:id' => 'families#toggle_approved_family'
  patch 'api/v1/family/delete/:id' => 'families#toggle_deleted_family'

  get 'api/v1/jobs' => 'jobs#index'
  get 'api/v1/jobs/new' => 'jobs#get_new_jobs'
  get 'api/v1/job/:id' => 'jobs#show'
  patch 'api/v1/job/:id' => 'jobs#update'
  patch 'api/v1/job/delete/:id' => 'jobs#toggle_deleted_job'

  get 'api/v1/agency/summary' => 'agency#index'
  get 'api/v1/agency/application/:id' => 'agency#application_show'
  get 'api/v1/agency/count_totals' => 'agency#count_totals'
  get 'agency/new' => 'agency#new'
  post 'agency' => 'agency#create'

  get 'messages/new' => 'messages#new'
  get 'messages/index' => 'messages#index'
  get 'message/detail/:id' => 'messages#show'
  post 'messages/new' => 'messages#create'

  resources :conversations do
    resources :messages
  end

  root to: 'home#index'

end
