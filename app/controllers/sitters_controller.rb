class SittersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @sitters = User.nanny.all

    render json: @sitters
  end

end
