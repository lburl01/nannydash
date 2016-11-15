class DashboardController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    render :index, layout: false
  end
end
