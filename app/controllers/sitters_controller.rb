class SittersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @sitters = User.get_active_sitters

    render json: @sitters
  end

end
