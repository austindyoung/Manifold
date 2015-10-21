class Assignment < ActiveRecord::Base
  belongs_to(
    :assignee,
    class_name: :User,
    foreign_key: :asignee_id,
    primary_key: :id
  )

  belongs_to(
    :task,
    class_name: :Task,
    foreign_key: :task_id,
    primary_key: :id
  )
end
