class HomeController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    @users = User.manager.all
  end
end
