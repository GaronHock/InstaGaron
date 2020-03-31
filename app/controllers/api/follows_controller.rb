  class Api::FollowsController < ApplicationController
  def index
    @followees = Follow.where(follower_id: current_user.id)
  end


  def create
    
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id 
   if @follow.save
    render "api/follows/show"
   else
    render @follow.errors.full_messages
   end
  end
  
  def destroy

    @follow = Follow.find_by(
      followed_user_id: params[:id],
      follower_id: current_user.id 
    )
    if @follow
      @follow.destroy
      render "api/follows/show"
    else
      render json: ["not following user"], status: 404
    end
  end

  private 
  def follow_params
    params.require(:follow).permit(:follower_id, :followed_user_id)
  end
end

  # belongs_to :followers, # this is someone following me 
  # foreign_key: :follower_id,
  # class_name: :User

  # belongs_to :followee, # this is me following someone