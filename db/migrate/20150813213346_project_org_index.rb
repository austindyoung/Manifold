class ProjectOrgIndex < ActiveRecord::Migration
  def change
  end
  add_index :projects, :organization_id
end
