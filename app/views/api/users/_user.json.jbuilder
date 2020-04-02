json.set! user.id do
    json.extract! user, :id, :username
    json.photoUrl url_for(user.profile_picture) if user.profile_picture.attached?
    json.published_photo_ids []
end




#json.comment_ids photo.comments.pluck(:id)  ###makes it an array















