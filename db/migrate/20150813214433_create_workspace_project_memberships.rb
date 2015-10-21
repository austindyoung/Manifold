class CreateWorkspaceProjectMemberships < ActiveRecord::Migration
  def change
    create_table :workspace_project_memberships do |t|
      t.integer :project_id, null: false
      t.integer :workspace_id, null: false
      t.timestamps null: false
    end
  end
end
