class TasksRemovePolyAssoc < ActiveRecord::Migration
  def change
    remove_column :tasks, :parentable_id
    remove_column :tasks, :parentable_type
    add_column :tasks, :project_id, :integer
  end
end
