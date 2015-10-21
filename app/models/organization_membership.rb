class OrganizationMembership < ActiveRecord::Base
  belongs_to(
    :member,
    class_name: :User,
    foreign_key: :member_id,
    primary_key: :id
  )

  belongs_to :organization
end
