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
    @family = User.find(params[:id])
    @family.update_attributes(job_params)
  end

  def toggle_deleted_job
    job = Job.find(params[:id])
    job.toggle!(:is_deleted)
  end

  private

    def job_params
      params.require(:job).permit(:sitter_id, :date, :start_time, :end_time, :notes,
        :confirmed, :is_assigned, :is_deleted)
    end

end
