class Api::UsersController < ApplicationController
    def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401  # this is an array 
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def user_params 
    params.require(:user).permit(:password, :username, :email, :biography)
  end
end
