class SittersController < ApplicationController
  skip_before_action :verify_authenticity_token

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
      sign_in @sitter
      redirect_to nanny_root_url
    else
      render 'new'
    end

  end

  def update
    @sitter = User.find(params[:id])

    @sitter.update_attribute(:picture, params[:user][:picture])

    ## From new form:
    # Parameters: {"utf8"=>"✓",
    # "authenticity_token"=>"n4NpirnivKY4QpNa5ezOM7HWOVRn9TRzSV0PGdgxPomgunPHXqHz17IXGG7vboHsg+ODaH6Sm35cfbl28sbpAA==",
    # "user"=>{"first_name"=>"Testy", "last_name"=>"Testerson",
    #   "email"=>"testy@testerson.com", "street"=>"1234 Something",
    #   "city"=>"Raleigh", "state"=>"NC", "zip_code"=>"27704",
    #   "county"=>"Durham", "phone_number"=>"1234561234", "password"=>"[FILTERED]",
    #   "role"=>"manager",
    #   "picture"=>#<ActionDispatch::Http::UploadedFile:0x007fef353695a8 @tempfile=#<Tempfile:/var/folders/z4/xwkw6gj54ps9nwdt2x153k3c0000gn/T/RackMultipart20161127-67596-fn1r3h.JPG>,
    #   @original_filename="sloppy joes.JPG", @content_type="image/jpeg",
    #   @headers="Content-Disposition: form-data; name=\"user[picture]\"; filename=\"sloppy joes.JPG\"\r\nContent-Type: image/jpeg\r\n">},
    #   "commit"=>"Join"}

    ## From update:
    # Parameters: {"user"=>{"picture"=>"NW trip - foggy forest2.jpg"}, "id"=>2, 
    # "sitter"=>{"user"=>{"picture"=>"NW trip - foggy forest2.jpg"}, "id"=>2}}
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
