class ProjectOrgNullness < ActiveRecord::Migration
  def change
    remove_column :projects, :organization_id
    add_column :projects, :organization_id, :integer
  end
end
