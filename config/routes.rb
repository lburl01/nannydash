Rails.application.routes.draw do
  devise_for :users, controllers: {sessions: 'users/sessions'}

  authenticated :user, ->(u) { u.manager? } do
    root to: "dashboard#index", as: :manager_root
  end

  authenticated :user, ->(u) { u.family? } do
    root to: "family_dashboard#index", as: :family_root
  end

  authenticated :user, ->(u) { u.nanny? } do
    root to: "nanny_dashboard#index", as: :nanny_root
  end

  get 'users/all_active' => 'messages#get_possible_recipients'
  get 'user/logged_in' => 'agency#show_current_user'

  get 'api/v1/agency/summary' => 'agency#index'
  get 'api/v1/agency/application/:id' => 'agency#application_show'
  get 'api/v1/agency/count_totals' => 'agency#count_totals'
  get 'agency/new' => 'agency#new'
  post 'agency' => 'agency#create'

  get 'sitter_dash/counts' => 'nanny_dashboard#get_all_counts'
  get 'sitter_dash/scheduled_jobs' => 'nanny_dashboard#get_scheduled_jobs'
  get 'sitter_dash/requested_jobs' => 'nanny_dashboard#get_requested_jobs'
  get 'sitter_dash/confirmed_jobs' => 'nanny_dashboard#get_confirmed_jobs'

  get 'family_dash/counts' => 'family_dashboard#get_all_counts'
  get 'family_dash/confirmed_jobs' => 'family_dashboard#get_confirmed_jobs'
  get 'family_dash/pending_jobs' => 'family_dashboard#get_pending_jobs'
  get 'family_dash/5_confirmed_jobs' => 'family_dashboard#get_five_confirmed_jobs'
  get 'family_dash/all_family_jobs' => 'family_dashboard#get_all_family_jobs'

  get 'api/v1/sitters' => 'sitters#index'
  get 'api/v1/sitter/:id' => 'sitters#show'
  get 'sitter/new' => 'sitters#new'
  post 'sitter/new' => 'sitters#create'
  match 'api/v1/sitter' => 'sitters#update', via: [:post, :patch]
  patch 'api/v1/sitter/delete/:id' => 'sitters#toggle_deleted_sitter'
  patch 'api/v1/sitter/approve/:id' => 'sitters#toggle_approved_sitter'
  get 'api/v1/sitters/pending' => 'sitters#pending'
  patch 'api/v1/sitter/cpr/:id' => 'sitters#set_cpr_true'
  patch 'api/v1/sitter/first_aid/:id' => 'sitters#set_first_aid_true'
  get 'api/v1/sitters/available' => 'sitters#available'

  get 'api/v1/families' => 'families#index'
  get 'api/v1/family/:id' => 'families#show'
  get 'api/v1/families/pending' => 'families#pending'
  patch 'api/v1/family/update/:id' => 'families#update'
  patch 'api/v1/family/:id' => 'families#toggle_active_family'
  patch '/api/v1/family/approved/:id' => 'families#toggle_approved_family'
  patch 'api/v1/family/delete/:id' => 'families#toggle_deleted_family'
  get 'family/new' => 'families#new'
  post 'family/new' => 'families#create'

  get 'api/v1/jobs' => 'jobs#index'
  get 'api/v1/jobs/new' => 'jobs#get_new_jobs'
  get 'api/v1/job/:id' => 'jobs#show'
  get 'api/v1/jobs/five_unassigned' => 'jobs#five_unassigned_jobs'
  patch 'api/v1/job/:id' => 'jobs#update'
  patch 'api/v1/job/confirm/:id' => 'jobs#toggle_confirmation'
  patch 'api/v1/job/assign/:id' => 'jobs#assign_sitter'
  patch 'api/v1/job/agency_assign/:id' => 'jobs#agency_assign_sitter'
  patch 'api/v1/job/delete/:id' => 'jobs#toggle_deleted_job'
  get 'job/new' => 'jobs#new'
  post 'job/new' => 'jobs#create'

  get 'messages/new' => 'messages#new'
  patch 'message/delete' => 'messages#toggle_deleted_message'
  post 'messages/new' => 'messages#create'

  resources :conversations do
    resources :messages
  end

  get 'home' => 'home#index'
  root to: 'home#index'

end
