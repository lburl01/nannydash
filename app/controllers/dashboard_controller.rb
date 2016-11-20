class DashboardController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_filter :authenticate_user!
  before_filter :verify_is_manager

  def index
    render :index, layout: false
  end

  private

    def verify_is_manager
      (current_user.nil?) ? redirect_to(root_path) : (redirect_to(root_path) unless current_user.manager?)
    end

end
