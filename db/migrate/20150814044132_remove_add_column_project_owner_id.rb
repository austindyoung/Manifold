class RemoveAddColumnProjectOwnerId < ActiveRecord::Migration
  def change
    remove_column :projects, :owner_id
    add_column :projects, :owner_id, :integer
  end
end
