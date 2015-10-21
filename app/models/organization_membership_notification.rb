class OrganizationMembershipNotification < ActiveRecord::Base
  belongs_to(
    :adder,
    class_name: :User,
    foreign_key: :adder_id,
    primary_key: :id
  )

  belongs_to(
    :organization,
    class_name: :Organization,
    foreign_key: :organization_id,
    primary_key: :id
  )
end
