class Api::ProjectMembershipNotificationsController < ApplicationController
  def create
    @project_membership_notification = ProjectMembershipNotification.new(project_membership_notification_params)

    if @project_membership_notification.save
      render json: @project_membership_notification
    else
      render json: @project_membership_notification.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @project_membership_notifications = current_user.project_membership_notifications
    render :index
  end

  private
  def project_membership_notification_params
    params.require(:project_membership_notification).permit(:user_id, :adder_id, :project_id)
  end
end
