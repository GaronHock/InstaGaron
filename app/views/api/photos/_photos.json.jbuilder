json.extract! photo, :id, :user_id, :description
json.photoUrl url_for(photo.photo) if photo.photo.attached?

