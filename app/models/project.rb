class Project < ActiveRecord::Base
  belongs_to(
    :owner,
    class_name: :User,
    foreign_key: :owner_id,
    primary_key: :id
  )

  belongs_to :organization

  has_many(
    :team_members,
    through: :team_memberships,
    source: :member
  )

  has_many(
    :team_memberships,
    class_name: :TeamMembership,
    foreign_key: :project_id,
    primary_key: :id
  )

  has_many :tasks

  def is_member?(user)
    team_members.where(id: user.id).exists?
  end
end
