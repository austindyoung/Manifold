class CreateOrganizationMemberships < ActiveRecord::Migration
  def change
    create_table :organization_memberships do |t|
      t.integer :member_id, null: false
      t.integer :organization_id, null: false
      t.timestamps null: false
    end
  end
end
