class Task < ActiveRecord::Base
  belongs_to(
    :creator,
    class_name: :User,
    foreign_key: :creator_id,
    primary_key: :id
  )

  belongs_to(
    :assigner,
    class_name: :User,
    foreign_key: :assigner_id,
    primary_key: :id
  )

  has_many(
    :assignments,
    class_name: :Assignment,
    foreign_key: :task_id,
    primary_key: :id
  )

  has_many(
    :assignees,
    through: :assignments,
    source: :assignee
  )

  belongs_to :project

  belongs_to(
    :parent,
    class_name: :Task,
    foreign_key: :parent_task_id,
    primary_key: :id
  )
end
