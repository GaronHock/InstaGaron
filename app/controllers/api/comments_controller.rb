  class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.includes(:user, :photo).where(photo_id: params[:photo_id])
    render :index
  end

  def show
    @comment = Comment.find(params[:id]) 
    render :show
    #find by accepts argument ,
    # fiindby(username), 
    #find(params[id),
    # find that id
  end

  def create
    @user = current_user
    
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id 
    if @comment.save
      render "/api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

  def update
    @comment = current_user.comments.find(params[:id])
    if @comment.update_attributes(comment_params)
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages
    end
  end
  
  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render "/api/comments/show"
    else 
      render json: @comment.errors.full_messages
    end
  end

  private 
  def comment_params
    params.require(:comment).permit(:user_id, :photo_id, :body)
  end
end