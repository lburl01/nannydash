class FamiliesController < ApplicationController
  skip_before_action :verify_authenticity_token
  # before_action :authenticate_user!

  def index
    @families_counties = User.get_approved_families

    render json: @families_counties
  end

  def show
    @family = User.get_family(params[:id])

    render json: @family
  end

  def new
    @family = User.new
  end

  def create
    @family = User.new(family_params)

    if @family.save
      redirect_to family_root
    else
      render 'new'
    end
  end

  def toggle_active_family
    family = User.find(params[:id])
    family.toggle!(:active)
  end

  def toggle_approved_family
    family = User.find(params[:id])
    family.toggle!(:approved)
  end

  def update
    @family = User.find(params[:id])
    @family.update_attributes(family_params)
  end

  def toggle_deleted_family
    family = User.find(params[:id])
    family.toggle!(:is_deleted)
  end

  def pending
    @pending_families = User.get_pending_families

    render json: @pending_families
  end

  private

    def family_params
      params.require(:user).permit(:first_name, :last_name, :email,
                                    :phone_number, :street, :city, :state, :zip_code,
                                    :county, :about, :active, :password, :picture, :role)
    end

end
