json.set! user.id do
    json.extract! user, :id
    json.published_photo_ids []
end




#json.comment_ids photo.comments.pluck(:id)  ###makes it an array















