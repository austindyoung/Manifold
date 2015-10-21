class Api::OrganizationMembershipNotificationsController < ApplicationController
  def create
    @organization_membership_notification = OrganizationMembershipNotification.new(organization_membership_notification_params)

    if @organization_membership_notification.save
      render json: @organization_membership_notification
    else
      render json: @organization_membership_notification.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @organization_membership_notifications = current_user.organization_membership_notifications
    render :index
  end

  private
  def organization_membership_notification_params
    params.require(:organization_membership_notification).permit(:user_id, :adder_id, :organization_id)
  end
end
