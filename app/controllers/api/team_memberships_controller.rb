class Api::TeamMembershipsController < ApplicationController
  def create
    @team_membership = TeamMembership.new(team_membership_params)

    if @team_membership.save
      render json: @team_membership
    else
      render json: @team_membership.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def team_membership_params
    params.require(:team_membership).permit(:project_id, :member_id)
  end
end
