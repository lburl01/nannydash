class JobsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @jobs = Job.get_assigned_jobs

    render json: @jobs
  end

  def get_new_jobs
    @new_jobs = Job.get_new_jobs

    render json: @new_jobs
  end

  def show
    @job = Job.show_job(params[:id])

    render json: @job
  end

  def update
    @job = Job.find(params[:id])
    @job.update_attributes(job_params)
  end

  def toggle_deleted_job
    job = Job.find(params[:id])
    job.toggle!(:is_deleted)
  end

  def five_unassigned_jobs
    @unassigned_jobs = Job.get_five_newest_jobs

    render json: @unassigned_jobs
  end

  def assign_sitter
    job = Job.assign_sitter_job(current_user, params[:id])
  end

  private

    def job_params
      params.require(:job).permit(:sitter_id, :date, :start_time, :end_time, :notes,
        :confirmed, :is_assigned, :is_deleted)
    end

end
