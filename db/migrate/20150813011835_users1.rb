class Users1 < ActiveRecord::Migration
  def change
    rename_column :assignments, :follower_id, :asignee_id
  end
end
