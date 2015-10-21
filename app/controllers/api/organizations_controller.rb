class Api::OrganizationsController < ApplicationController
  # before_action :require_organization_membership!

  def create
    @organization = current_user.organizations.new(organization_params)

    if @organization.save
      render json: @organization
    else
      render json: @organization.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    if params[:search]
      @organizations = Organization.search(params[:search])
      # @organizations = Organization.all
    else
      @organizations = Organization.all.select {|org| org.is_member?(current_user)}
      render :index
    end
  end

  def show
    # :bare_tasks
    @organization = Organization.includes(:members, projects: :tasks).find(params[:id])

    if @organization.is_member?(current_user)
      render :show
    else
      render :members
    end
  end

  def update
    @organization = current_user.organizations.find(params[:id])

    if @organization.update(organization_params)
      render json: @organization
    else
      render json: @organization.errors.full_messages, status: :unprocessable_entity
    end
  end

  #fix this
  # def destroy
  #   @organization = current_user.organizations.find(params[:id])
  #   @organization.try(:destroy)
  #   render json: {}
  # end

  private


  def organization_params
    params.require(:organization).permit(:title)
  end

end
