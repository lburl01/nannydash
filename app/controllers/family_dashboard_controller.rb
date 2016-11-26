class FamilyDashboardController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    render :index, layout: false
  end

  def get_all_counts
    @pending_jobs = Job.get_family_pending_jobs_count(current_user)
    @confirmed_jobs = Job.get_family_confirmed_jobs_count(current_user)
    @new_messages = Message.get_new_messages_count(current_user)
    @all_sitters = User.get_available_sitters

    @count_totals = { "pending_jobs" => @pending_jobs,
                      "confirmed_jobs" => @confirmed_jobs,
                      "new_messages" => @new_messages,
                      "all_sitters" => @all_sitters}

    render json: @count_totals
  end

  def get_confirmed_jobs

  end

  def get_pending_jobs

  end

  def get_five_confirmed_jobs

  end

end
