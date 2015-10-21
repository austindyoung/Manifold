class Api::WorkspacesController < ApplicationController
  def create
    @workspace = current_user.workspaces.new(workspace_params)

    if @workspace.save
      render json: @workspace
    else
      render json: @workspace.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @workspaces = current_user.workspaces
    render :index
  end

  def show
    @workspace = Workspace.includes(:members, :bare_tasks, projects: :tasks).find(params[:id])

    if current_user.id == @workspace.user_id
      render :show
    else
      render json: ["Access Denied"], status: 403
    end
  end

  def update
    @workspace = current_user.workspaces.find(params[:id])

    if @workspace.update(workspace_params)
      render json: @workspace
    else
      render json: @workspace.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @organization = current_user.organizations.find(params[:id])
    @organization.try(:destroy)
    render json: {}
  end

  private

  def workspace_params
    params.require(:workspace).permit(:title, :user_id)
  end

end
