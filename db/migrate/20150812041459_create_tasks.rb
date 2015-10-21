class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.text :title, null: false
      t.integer :parent_task_id
      t.text :description
      t.integer :member_id, null: false
      t.integer :project_id, null: false
      t.date :assigned_date, null: false
      t.date :due_date
      t.boolean :completed
      t.date :date_completed
      t.timestamps null: false
    end
    add_index :tasks, :member_id
    add_index :tasks, :project_id
    add_index :tasks, :parent_task_id, unique: true
  end
end
