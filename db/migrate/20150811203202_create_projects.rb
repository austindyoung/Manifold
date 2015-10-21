class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :owner_id, null: false
      t.integer :organization_id, null: false
      t.text :status
      t.text :progress
      t.date :due_date
      t.timestamps null: false
    end
    add_index :projects, :owner_id, unique: true
    add_index :projects, :organization_id
  end
end
