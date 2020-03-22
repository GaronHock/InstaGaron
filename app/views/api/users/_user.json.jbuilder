json.set! user.id do
    json.extract! user, :id
    json.published_photo_ids []
end

json.followee_ids user.followees.pluck(:id)


#json.comment_ids photo.comments.pluck(:id)  ###makes it an array















