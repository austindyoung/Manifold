class WorkspaceMembershipsAddIndices < ActiveRecord::Migration
  def change
  end
  
  add_index :workspace_project_memberships, :workspace_id
end
