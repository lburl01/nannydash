class AgencyController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @messages = Message.get_latest_messages
    @applications = User.get_new_applicants
    @assignments = Job.get_five_newest_jobs
    @open_jobs = Job.get_five_open_jobs

    @summary = { "messages" => @messages, "applications" => @applications,
                 "assignments" => @assignments, "open_jobs" => @open_jobs}

    render json: @summary
  end

  def application_show
    @application = User.get_application(params[:id])

    render json: @application
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

  def count_totals
    @pending_sitters = User.get_pending_sitter_count
    @pending_parents = User.get_pending_family_count
    @new_jobs = Job.get_new_jobs_count
    @all_jobs = Job.get_all_jobs_count
    @new_messages = Message.get_new_messages_count

    @count_totals = { "pending_sitters" => @pending_sitters,
                      "pending_parents" => @pending_parents,
                      "new_jobs" => @new_jobs,
                      "all_jobs" => @all_jobs,
                      "new_messages" => @new_messages
                    }

    render json: @count_totals
  end

  private

    def agency_params
      params.require(:user).permit(:first_name, :last_name, :email, :password,
                                     :street, :city, :state, :zip_code, :role,
                                     :county, :is_deleted, :picture, :phone_number)
    end

end
