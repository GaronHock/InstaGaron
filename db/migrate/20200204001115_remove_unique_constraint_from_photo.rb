class RemoveUniqueConstraintFromPhoto < ActiveRecord::Migration[5.2]
  def change
    remove_index :photos, :user_id
    add_index :photos, :user_id
  end
end
