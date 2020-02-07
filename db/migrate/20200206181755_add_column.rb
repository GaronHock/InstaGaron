class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_picture_id, :integer
  end
end
