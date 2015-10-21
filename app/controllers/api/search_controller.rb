class Api::SearchController < ApplicationController
  def index
    # if params[:search]
      # @organizations = Organization.search(params[:search])
    # else
      @organizations = Organization.all
      render :index
    # end
  end
end
