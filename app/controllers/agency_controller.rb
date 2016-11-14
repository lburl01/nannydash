class AgencyController < ApplicationController

  def index
    @users = User.all
  end

  def families
    data = User.family.where(approved: true).all

    @families = []

    data.each do |family|
      @families << {"family_id" => family.id, "first_name" => family.first_name,
                      "last_name" => family.last_name, "email" => family.email,
                      "phone" => family.phone_number, "county" => "Wake",
                      "about" => family.about, "active?" => family.active
                    }
    end

    render json: @families

    # respond_to do |format|
    #   format.json { render json: @families }
    #   format.html { render :families }
    # end
  end

end
