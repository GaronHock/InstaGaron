class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.text :description

      t.timestamps
      t.index :user_id, unique: true
    end
  end
end



