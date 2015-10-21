class CreateOrganizations < ActiveRecord::Migration
  def change
    create_table :organizations do |t|
      t.string :title, null: false, unique: true
      t.timestamps null: false
    end
  end
end
