class Api::UsersController < ApplicationController
  def show
    @user = User.find_by_id(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    @user.profile_photo.attach(io: File.open('app/assets/images/demo.png'), filename: 'demo.png')
    
    if @user.save
      log_in(@user)
      render :show
    else 
      render json: @user.errors.full_messages, status: 422
    end 
  end

  private

  def user_params
    params.require(:user).permit(:password, :first_name, :last_name, :email, :profile_photo)
  end
end
