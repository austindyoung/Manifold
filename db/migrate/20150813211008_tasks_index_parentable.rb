class TasksIndexParentable < ActiveRecord::Migration
  def change
  end
  add_index :tasks, :parentable_id
end
