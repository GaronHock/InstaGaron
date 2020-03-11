if(@comments)
  @comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comments', comment: comment
    end
  end

end