class Api::WorkspaceProjectMembershipsController < ApplicationController
  def create
    @workspace_project_membership = WorkspaceProjectMembership.new(workspace_project_membership_params)

    if @workspace_project_membership.save
      render json: @workspace_project_membership
    else
      render json: @workspace_project_membership.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def workspace_project_membership_params
    params.require(:workspace_project_membership).permit(:project_id, :workspace_id)
  end
end
