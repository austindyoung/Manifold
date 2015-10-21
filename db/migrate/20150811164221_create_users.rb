class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :mname
      t.string :lname, null: false
      t.string :email, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :img_file
      t.timestamps null: false
    end
    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
  end
end
