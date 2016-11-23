class NannyDashboardController < ApplicationController
  def index
    render :index, layout: false
  end

  def get_all_counts
    @all_families = User.get_all_families_count
    @unassigned_jobs = Job.get_unassigned_jobs_count
    @assigned_jobs = Job.get_assigned_jobs_count
    @new_messages = Message.get_new_messages_count(current_user)

    @count_totals = { "all_families" => @all_families,
                      "unassigned_jobs" => @unassigned_jobs,
                      "assigned_jobs" => @assigned_jobs,
                      "new_messages" => @new_messages
                    }

    render json: @count_totals
  end
end
