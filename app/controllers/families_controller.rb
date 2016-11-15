class FamiliesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    data = User.family.where(approved: true).all

    @families = []

    data.each do |family|
      @families << {"family_id" => family.id, "first_name" => family.first_name,
                      "last_name" => family.last_name, "email" => family.email,
                      "phone" => family.phone_number, "county" => "Wake",
                      "about" => family.about, "active" => family.active
                    }
    end

    render json: @families
  end

  def toggle_active_family
    family = User.find(params[:id])
    family.toggle!(:active)
  end

end
