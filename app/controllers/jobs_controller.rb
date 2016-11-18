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

  def show_new
    @new_job = Job.show_new_job(params[:id])

    render json: @new_job
  end

end
