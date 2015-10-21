class CreateTeamMemberships < ActiveRecord::Migration
  def change
    create_table :team_memberships do |t|
      t.integer :project_id, null: false
      t.integer :member_id, null: false
      t.timestamps null: false
    end
    add_index :team_memberships, :member_id
    add_index :team_memberships, :project_id
  end
end
