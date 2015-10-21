class Organization < ActiveRecord::Base
  has_many(
    :organization_memberships,
    class_name: :OrganizationMembership,
    foreign_key: :organization_id,
    primary_key: :id
  )

  has_many(
    :teams,
    through: :projects,
    source: :team_members
  )

  has_many(
    :members,
    through: :organization_memberships,
    source: :member
  )

  has_many :projects

  has_many(
    :tasks,
    through: :projects,
    source: :tasks
  )

  def self.search(fragment)

    Organization.where("title ~* ?", "^#{fragment}[a-zA-Z]*|[a-zA-Z]* #{fragment}")
  end

  def is_member?(user)
    organization_memberships.where(member_id: user.id).exists?
  end
end
