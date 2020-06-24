class UsersController < ApplicationController
  def edit
  end

  private

  def strong_params
    params.require(:user).permit(:name, :email)
  end

end
