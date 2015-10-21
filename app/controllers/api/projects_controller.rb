class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    if @project.save
      render json: @project
    else
      render json: @project.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def index
    if params[:all]
      # optimize this
      @projects = current_user.all_projects - Workspace.find(params[:workspace_id]).projects
    else
      @projects = current_user.projects
      render :index
    end
  end

  def update

  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    render json: @project
  end

  private

  def current_organization
    if params[:id]
      @project = Project.find(params[:id])
      @organization = @project.organization
    elsif params[:project]
      @organization = Organization.find(params[:project][:organization_id])
    end
  end

  def project_params
    params.require(:project).permit(:title, :description, :status, :progress, :due_date, :organization_id, :owner_id)
  end

end
