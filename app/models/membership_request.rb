class MembershipRequest < ActiveRecord::Base
  belongs_to(
    :requester,
    class_name: :User,
    foreign_key: :requester_id,
    primary_key: :id
  )

  belongs_to(
    :requestee,
    class_name: :User,
    foreign_key: :requestee_id,
    primary_key: :id
  )

  belongs_to(
    :organization,
    class_name: :Organization,
    foreign_key: :organization_id,
    primary_key: :id
  )
end
