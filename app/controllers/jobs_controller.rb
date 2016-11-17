class JobsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @jobs = Job.get_assigned_jobs

    render json: @jobs
  end

end
