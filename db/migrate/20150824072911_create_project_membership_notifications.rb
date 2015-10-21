class CreateProjectMembershipNotifications < ActiveRecord::Migration
  def change
    create_table :project_membership_notifications do |t|
      t.integer :project_id, null: false
      t.integer :adder_id, nulll: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
  end
end
