class FamiliesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @families = User.get_approved_families

    render json: @families
  end

  def show
    @family = User.get_family(params[:id])
    render json: @family
  end

  def toggle_active_family
    family = User.find(params[:id])
    family.toggle!(:active)
  end

end
