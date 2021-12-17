Rails.application.routes.draw do
  get 'pages/index'
  root 'pages#index'
  
  namespace :api do
    resources :students, param: :id
    resources :students, only: [:index, :create, :destroy, :update] 
  end

  get '*path', to: 'pages#index', via: :all
end 
