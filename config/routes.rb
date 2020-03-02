Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update] do
      resources :photos, only: [:index]
      resources :follows, only: [:index]
    end
     # resources :photos, only: [:edit]
   # end
    resource :session, only: [:create, :destroy]
    resources :follows, only: [:create,:destroy]
    resources :photos, only: [:show, :create, :post, :update,:destroy] do
      resources :comments, only: [:index] 
    end
    resources :comments, only: [:show, :create, :update, :destroy]
  end
end
