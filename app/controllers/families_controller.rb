class FamiliesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def toggle_active_family
    family = User.find(params[:id])
    family.toggle!(:active)
  end

end
