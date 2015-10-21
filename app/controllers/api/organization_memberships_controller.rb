class Api::OrganizationMembershipsController < ApplicationController
  def create
    @organization_membership = OrganizationMembership.new(organization_membership_params)

    if @organization_membership.save
      render json: @organization_membership
    else
      render json: @organization_membership.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def organization_membership_params
    params.require(:organization_membership).permit(:member_id, :organization_id)
  end
end
