class Workspace < ActiveRecord::Base
  has_many :workspace_project_memberships
  has_many :workspace_task_memberships
  has_many(
    :projects,
    through: :workspace_project_memberships,
    source: :project
  )

  has_many(
    :bound_tasks,
    through: :projects,
    source: :tasks
  )

  has_many(
    :members,
    through: :projects,
    source: :team_members
  )

  has_many(
    :bare_tasks,
    through: :workspace_task_memberships,
    source: :task
  )

  def is_current_users?
    !!current_user.id == user_id
  end

  def tasks
    bound_tasks + naked_tasks
  end
end
