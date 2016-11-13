class HomeController < ApplicationController
  def index
    @users = User.manager.all
  end
end
