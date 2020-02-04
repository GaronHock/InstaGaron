
json.set! user.id do
    json.extract! user, :id 
    json.published_photo_ids []
end














