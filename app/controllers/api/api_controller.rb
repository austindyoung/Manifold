class Api::ApiController < ApplicationController
  before_action :require_logged_in!

  def require_organization_membership!
    redirect_to new_session_url unless current_organization.is_member?(current_user)
  end
  #
  # def require_workspace_ownership!
  #   redirect_to new_session_url unless current_organization.is_member?(current_user)
  # end

  def require_logged_in!
    unless signed_in?
      render json: ["You must be signed in to perform that action!"], status: :unauthorized
    end
  end
end
