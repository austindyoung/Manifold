class CreateMembershipRequests < ActiveRecord::Migration
  def change
    create_table :membership_requests do |t|
      t.integer :requester_id, null: false
      t.integer :requestee_id, null: false
      t.integer :organization_id, null: false
      t.timestamps null: false
    end
  end
end
