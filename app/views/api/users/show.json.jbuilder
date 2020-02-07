json.user do
  json.extract! @user, :id, :username, :email, :biography, :published_photo_ids
  json.photoUrl url_for(@user.profile_picture) if @user.profile_picture.attached?
end


json.photos do
  @user.published_photos.map do |photo|
    json.set! photo.id do
      json.partial! 'api/photos/photos', photo: photo
    end   
  end
end


