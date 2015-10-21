

class User < ActiveRecord::Base

  after_initialize :ensure_session_token
  attr_reader :password
  validates :email, :fname, :lname, :password_digest, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many(
    :tasks,
    class_name: :Task,
    foreign_key: :assignee_id,
    primary_key: :id
  )

  has_many(
    :workspaces,
    class_name: :Workspace,
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :created_tasks,
    class_name: :Task,
    foreign_key: :creator_id,
    primary_key: :id
  )

  has_many(
    :assigned_tasks,
    class_name: :Task,
    foreign_key: :assigner_id,
    primary_key: :id
  )

  has_many(
    :organization_memberships,
    class_name: :OrganizationMembership,
    foreign_key: :member_id,
    primary_key: :id
  )

  has_many(
    :assignments,
    class_name: :Assignment,
    foreign_key: :assignee_id,
    primary_key: :id
)

  has_many(
    :tasks,
    through: :assignments,
    source: :task
  )

  has_many(
    :team_memberships,
    class_name: :TeamMembership,
    foreign_key: :member_id,
    primary_key: :id,
  )

  # has_many(
  #   :teams,
  #   through: :projects,
  #   source: :team_members
  # )

  has_many(
    :comments,
    class_name: :Comment,
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :organizations,
    through: :organization_memberships,
    source: :organization
  )

  has_many(
    :projects,
    through: :team_memberships,
    source: :project
  )

  has_many(
    :projects_as_creator,
    class_name: :Project,
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many(
    :requests,
    class_name: :MembershipRequest,
    foreign_key: :requestee_id,
    primary_key: :id
  )

  has_many(
    :organization_membership_notifications,
    class_name: :OrganizationMembershipNotification,
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :project_membership_notifications,
    class_name: :ProjectMembershipNotification,
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :all_projects,
    through: :organizations,
    source: :projects
  )

  def self.search(fragment)
    return [] if fragment == ""
    fragment = fragment.downcase
    (User.where("fname ~* ?", "^#{fragment}[a-z]*|[a-z]* #{fragment}") + User.where("mname ~* ?", "^#{fragment}[a-z]*|[a-z]* #{fragment}") + User.where("lname ~* ?", "^#{fragment}[a-z]*|[a-z]* #{fragment}")).uniq
  end

  def gravatar_url
    "http://www.gravatar.com/avatar/#{ Digest::MD5.hexdigest(email) }"
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      user
    end
  end
end
