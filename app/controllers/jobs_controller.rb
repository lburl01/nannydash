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

  def toggle_confirmation
    @job = Job.find(params[:id])
    @job.toggle!(:confirmed)
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

  def new
    @job = Job.new
  end

  def create
    @family = current_user

    @job = Job.new(family_id: @family.id,
                   start_time: params[:start_time],
                   end_time: params[:end_time], date: params[:date],
                   notes: params[:notes])

    @job.save!

    if params.has_key?("sitter_id")
      @sitter = User.find(params[:sitter_id])

      @job = Job.new(family_id: @family.id, sitter_id: @sitter.id,
                     start_time: params[:start_time],
                     end_time: params[:end_time], date: params[:date],
                     notes: params[:notes])

      if @job.save
        @text_message = %Q(You've been requested for a new babysitting gig on #{@job.date}
          For more details or to claim this job, visit:
          https://nannydash.herokuapp.com/#/new-job/info/#{@job.id})

        @recipient = User.find(@sitter.id)
        phone_number = ENV['SAMPLE_NUMBER']
        send_message(phone_number, @text_message)
      end
    end

  end

  private

    def sanitize(number)
      "+1" + number.gsub(/^1|\D/, "")
    end

    def send_message(phone_number, text_message)

      @twilio_number = ENV['TWILIO_NUMBER']
      @client = Twilio::REST::Client.new ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN']

      message = @client.account.messages.create(
        :from => @twilio_number,
        :to => phone_number,
        :body => text_message
      )

    end

  private

    def job_params
      params.require(:job).permit(:sitter_id, :date, :start_time, :end_time, :notes,
        :confirmed, :is_assigned, :is_deleted)
    end

end
