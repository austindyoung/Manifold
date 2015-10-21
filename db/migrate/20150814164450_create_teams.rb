class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.integer :project_id, null: false
      t.timestamps null: false
    end
  end
end
