Rails.application.routes.draw do
  get 'welcome/index'

  resources :welcome
  root "welcome#index"

  get "/login"          => "sessions#new", as: "login"
  post "/sessions"      => "sessions#create"
  delete "/sessions"    => "sessions#destroy", as: "logout"

  resources :mostpopulardestinations
  resources :otherusers

  # /users/...
  resources :users do
    #/users/:id/locations
    resources :locations
    resources :stories
  end

end
