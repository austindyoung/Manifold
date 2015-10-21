class WorkspaceUser < ActiveRecord::Migration
  def change
    add_column :workspaces, :user_id, :integer
  end
end
