  class Photo < ApplicationRecord

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  has_many :comments,
  foreign_key: :photo_id,
  class_name: :Comment
  
  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors[:image] << "Must have an image"
    end
  end
  
end
