class ProjectAddIndex < ActiveRecord::Migration
  def change
  end
  add_index :projects, :owner_id
end
