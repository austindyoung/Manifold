class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    if params[:search]
      @users = User.search(params[:search])
    else
      @users = User.all
    end
    render :index
  end
end
