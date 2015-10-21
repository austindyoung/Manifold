class ProjectMembershipNotification < ActiveRecord::Base
  belongs_to(
    :adder,
    class_name: :User,
    foreign_key: :add_id,
    primary_key: :id
  )

  belongs_to(
    :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id
  )

  belongs_to(
    :project,
    class_name: :Project,
    foreign_key: :project_id,
    primary_key: :id
  )
end
