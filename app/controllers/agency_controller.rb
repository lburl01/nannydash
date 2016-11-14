class AgencyController < ApplicationController

  def index
    @users = User.manager.all
  end

  def new
    @agency = User.new
  end

  def create
    @agency = User.new(agency_params)
    if @agency.save
      flash[:info] = "Account successfully created."
      redirect_to root_url
    else
      render 'new'
    end
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

  private

    def agency_params
      params.require(:user).permit(:first_name, :last_name, :email, :password,
                                     :street, :city, :state, :zip_code, :role,
                                     :county, :is_deleted, :picture)
    end

end
