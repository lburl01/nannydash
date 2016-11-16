class SittersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @sitters = User.get_active_sitters

    render json: @sitters
  end

  def show
    @sitter = User.get_sitter(params[:id])

    render json: @sitter
  end

  def update
    @sitter = User.find(params[:id])

    @sitter.update_attributes!(sitter_params)
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
                                     :recommendation_three_name, :recommendation_three_email,)
    end
end
