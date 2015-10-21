class WorkspaceMemberhsipsAddIndices < ActiveRecord::Migration
  def change
  end
  
  add_index :workspace_task_memberships, :workspace_id
end
