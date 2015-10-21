class CreateAssignments < ActiveRecord::Migration
  def change
    create_table :assignments do |t|
      t.integer :task_id, null: false
      t.integer :follower_id, null: false
      t.timestamps null: false
    end
    add_index :assignments, :task_id
    add_index :assignments, :follower_id
  end
end
