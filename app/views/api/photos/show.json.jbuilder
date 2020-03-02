json.photo do 
  json.partial! 'api/photos/photo', photo: @photo
end

json.comments do 
  @photo.comments.map do |comment|
    json.set! comment.id do 
      json.partial! 'api/comments/comments', comment: comment
    end
  end
end
