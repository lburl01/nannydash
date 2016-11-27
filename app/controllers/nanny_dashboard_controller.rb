class NannyDashboardController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!

  def index
    render :index, layout: false
  end

  def get_all_counts
    @all_families = User.get_approved_families_count
    @unassigned_jobs = Job.get_unassigned_jobs_count
    @assigned_jobs = Job.get_sitter_assigned_jobs_count(current_user)
    @new_messages = Message.get_new_messages_count(current_user)
    @pending_jobs = Job.get_pending_sitter_jobs_count(current_user)

    @count_totals = { "all_families" => @all_families,
                      "unassigned_jobs" => @unassigned_jobs,
                      "assigned_jobs" => @assigned_jobs,
                      "new_messages" => @new_messages,
                      "pending_jobs" => @pending_jobs
                    }

    render json: @count_totals
  end

  def get_scheduled_jobs
    @scheduled_jobs = Job.get_sitter_jobs(current_user)

    render json: @scheduled_jobs
  end

  def get_confirmed_jobs
    @confirmed_jobs = Job.get_confirmed_sitter_jobs(current_user)

    render json: @confirmed_jobs
  end

  def get_requested_jobs
    @requested_jobs = Job.get_sitter_requested_jobs(current_user)

    render json: @requested_jobs
  end

end
