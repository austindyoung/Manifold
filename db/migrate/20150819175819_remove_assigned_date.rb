class RemoveAssignedDate < ActiveRecord::Migration
  def change
    remove_column :tasks, :assigned_date
  end
end
