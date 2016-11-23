class DashboardController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    render :index, layout: false
  end


end
