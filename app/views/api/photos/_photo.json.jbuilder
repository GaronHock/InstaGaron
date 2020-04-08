json.extract! photo, :id, :user_id, :description, :created_at
json.photoUrl url_for(photo.photo) if photo.photo.attached?
json.user photo.user.username
json.user_profile_pic_url url_for(photo.user.profile_picture) if photo.user.profile_picture.attached?


json.comment_ids photo.comments.pluck(:id)  ###makes it an array
json.comments do 
  photo.comments.map do |comment|
    json.set! comment.id do 
     json.partial! 'api/comments/comments', comment: comment
    end
  end
end