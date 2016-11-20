class SittersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_filter :authenticate_user!

  def index
    @sitters_counties = User.get_active_sitters

    render json: @sitters_counties
  end

  def show
    @sitter = User.get_sitter(params[:id])

    render json: @sitter
  end

  def new
    @sitter = User.new
  end

  def create
    @sitter = User.new(sitter_params)

    if @sitter.save
      flash[:info] = "Account successfully created."
      redirect_to 'dashboard'
    else
      render 'new'
    end

  end

  def update
    @sitter = User.find(params[:id])
    @sitter.update_attributes(sitter_params)
  end

  def toggle_deleted_sitter
    sitter = User.find(params[:id])
    sitter.toggle!(:is_deleted)
  end

  def toggle_approved_sitter
    sitter = User.find(params[:id])
    sitter.toggle!(:approved)
  end

  def pending
    @pending_sitters = User.get_pending_sitters

    render json: @pending_sitters
  end

  private

    def sitter_params
      params.require(:user).permit(:first_name, :last_name, :email,
                                     :street, :city, :state, :zip_code, :birthday,
                                     :county, :is_deleted, :phone_number, :active,
                                     :approved, :cpr_certification,
                                     :first_aid_certification, :hourly_rate,
                                     :recommendation_one_name, :recommendation_one_email,
                                     :recommendation_two_name, :recommendation_two_email,
                                     :recommendation_three_name, :recommendation_three_email,
                                     :password, :picture)
    end

end
