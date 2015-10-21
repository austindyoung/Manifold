class TaskPoly < ActiveRecord::Migration
  def change
    remove_column :tasks, :project_id
    add_column :tasks, :parentable_id, :integer
    add_column :tasks, :parentable_type, :string
  end

end
