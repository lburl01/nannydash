class AgencyController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @users = User.manager.all

    render :index
  end

  def new
    @agency = User.new
  end

  def create
    @agency = User.new(agency_params)
    if @agency.save
      flash[:info] = "Account successfully created."
      redirect_to 'agency/index'
    else
      render 'new'
    end
  end

  private

    def agency_params
      params.require(:user).permit(:first_name, :last_name, :email, :password,
                                     :street, :city, :state, :zip_code, :role,
                                     :county, :is_deleted, :picture, :phone_number)
    end

end
