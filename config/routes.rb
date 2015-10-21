Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :index]
    resources :organizations, except: [:new, :edit]
    resources :workspaces, except: [:new, :edit]
    resources :projects, only: [:create, :update, :destroy, :index, :show]
    resources :tasks, only: [:create, :show, :update, :destroy]
    resources :workspace_project_memberships, only: [:create]
    resources :team_memberships, only: [:create]
    resources :search, only: [:index]
    resources :membership_requests, only: [:create, :index]
    resources :organization_memberships, only: [:create]
    resources :organization_membership_notifications, only: [:create, :index]
    resources :project_membership_notifications, only: [:create, :index]
    resources :assignments, only: [:create]
  end
end
