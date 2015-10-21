class TasksRenameToOwner < ActiveRecord::Migration
  def change
    rename_column :tasks, :member_id, :creator_id
  end
end
