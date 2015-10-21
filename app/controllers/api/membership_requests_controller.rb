class Api::MembershipRequestsController < ApplicationController
  def create
    @membership_request = MembershipRequest.new(membership_request_params)

    if @membership_request.save
      render json: @membership_request
    else
      render json: @membership_request.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @membership_requests = current_user.requests
    render :index
  end

  private
  def membership_request_params
    params.require(:membership_request).permit(:requestee_id, :requester_id, :organization_id)
  end
end
