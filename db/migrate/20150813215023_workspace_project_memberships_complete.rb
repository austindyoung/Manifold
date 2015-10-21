class WorkspaceProjectMembershipsComplete < ActiveRecord::Migration
  def change
    add_column :workspace_task_memberships, :task_id, :integer
    add_column :workspace_task_memberships, :workspace_id, :integer
  end
end
