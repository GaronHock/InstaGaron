class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.where(user_id: params[:user_id])
    render :index
  end
  def show
    @photo = Photo.find(params[:id]) #find by accepts argument , fiindby(username), find(params[id), find that id
  end

  def create
    @user = current_user
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id 
    if @photo.save
      render "/api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 401
    end
  end

  def update
    @photo = current_user.photos.find(params[:id])
    if @photo.update_attributes(photo_params)
      render "api/users/show"
    else
      render json: @photo.errors.full_messages
    end
  end

    
  def destroy
    photo = Photo.find(params[:id])
    photo.destroy
    render "api/users/show"
  end

  private 
  def photo_params
    params.require(:photo).permit(:description, :photo)
  end
end