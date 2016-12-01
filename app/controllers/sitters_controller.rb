class SittersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @sitters_counties = User.get_active_sitters

    render json: @sitters_counties
  end

  def show
    @sitter = User.find(params[:id])

    render json: @sitter
  end

  def new
    @sitter = User.new
  end

  def create
    @sitter = User.new(sitter_params)

    if @sitter.save
      sign_in @sitter
      redirect_to nanny_root_url
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
    sitter.toggle!(:active)
  end

  def pending
    @pending_sitters = User.get_pending_sitters

    render json: @pending_sitters
  end

  def set_cpr_true
    sitter = User.find(params[:id])
    sitter.toggle!(:cpr_certification)
  end

  def set_first_aid_true
    sitter = User.find(params[:id])
    sitter.toggle!(:first_aid_certification)
  end

  def available
    @available_sitters = User.get_available_sitters

    render json: @available_sitters
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
                                     :password, :picture, :role)
    end

end
