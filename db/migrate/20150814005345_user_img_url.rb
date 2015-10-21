class UserImgUrl < ActiveRecord::Migration
  def change
    rename_column :users, :img_file, :img_url
  end
end
