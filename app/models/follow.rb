class Follow < ApplicationRecord
  validates :followee, uniqueness: true

  belongs_to :followers, # this is someone following me 
  foreign_key: :follower_id,
  class_name: :User

  belongs_to :followee, # this is me following someone
  foreign_key: :followed_user_id,
  class_name: :User
end
