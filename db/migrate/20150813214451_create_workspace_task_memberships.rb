class CreateWorkspaceTaskMemberships < ActiveRecord::Migration
  def change
    create_table :workspace_task_memberships do |t|

      t.timestamps null: false
    end
  end
end
