class CreateOrganizationMembershipNotifications < ActiveRecord::Migration
  def change
    create_table :organization_membership_notifications do |t|
      t.integer :user_id, null: false
      t.integer :adder_id, null: false
      t.integer :organization_id, null: false
      t.timestamps null: false
    end
  end
end
