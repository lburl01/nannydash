class Job < ApplicationRecord
  belongs_to :posted_job, :foreign_key => :family_id, class_name: 'User'
  belongs_to :assignment, :foreign_key => :sitter_id, class_name: 'User', optional: true

  validates_presence_of :family_id, :date, :start_time, :end_time

  def self.get_assigned_jobs
    response = Job.where("date >= ?", Time.zone.now.beginning_of_day).where( { is_deleted: false, is_assigned: true } ).all

    @jobs = []

    response.each do |job|
      @jobs << { "job_id" => job.id, "family_id" => job.family_id,
                 "family_first_name" => job.posted_job.first_name,
                 "family_last_name" => job.posted_job.last_name,
                 "sitter_first_name" => job.assignment.first_name,
                 "sitter_last_name" => job.assignment.last_name,
                 "date" => job.date, "is_assigned" => job.is_assigned,
                 "start_time" => job.start_time.strftime("%I:%M %p"),
                 "end_time" => job.end_time.strftime("%I:%M %p"),
                 "confirmed" => job.confirmed,
                 "created" => job.created_at.strftime("%m/%d/%Y %I:%M %p")
               }
    end

    return @jobs
  end

  def self.get_new_jobs
    response = Job.where("date >= ?", Time.zone.now.beginning_of_day).where( { is_deleted: false, is_assigned: false, confirmed: false } ).all

    @new_jobs = []

    response.each do |job|
      if !job.sitter_id
        @new_jobs << { "job_id" => job.id, "family_id" => job.family_id,
                   "family_first_name" => job.posted_job.first_name,
                   "family_last_name" => job.posted_job.last_name,
                   "date" => job.date, "is_assigned" => job.is_assigned,
                   "start_time" => job.start_time.strftime("%I:%M %p"),
                   "end_time" => job.end_time.strftime("%I:%M %p"),
                   "notes" => job.notes, "confirmed" => job.confirmed,
                   "created" => job.created_at.strftime("%m/%d/%Y %I:%M %p")
                 }
      end
    end

    return @new_jobs
  end

  def self.get_five_newest_jobs
    @response = Job.where("date >= ?", Time.zone.now.beginning_of_day).where( { confirmed: false, is_assigned: false, is_deleted: false } ).order(created_at: :desc).limit(5)

    @newest_jobs = []

    @response.each do |job|
      family_name = "#{job.posted_job.first_name} #{job.posted_job.last_name}"
      date_time = "#{job.date} #{job.start_time.strftime("%I:%M %p")}"
      @newest_jobs << { "job_id" => job.id, "name" => family_name,
                        "date_time" => date_time, "is_assigned" => job.is_assigned,
                        "county" => job.posted_job.county, "confirmed" => job.confirmed,
                        "start_time" => job.start_time.strftime("%I:%M %p"),
                        "end_time" => job.end_time.strftime("%I:%M %p"),
                        "submitted" => job.created_at.strftime("%m/%d/%Y %I:%M %p")}
    end

    return @newest_jobs
  end

  def self.get_five_open_jobs
    @response = Job.where("date >= ?", Time.zone.now.beginning_of_day).where( { confirmed: true, is_assigned: true, is_deleted: false } ).order(created_at: :desc).limit(5)

    @upcoming_jobs = []

    @response.each do |job|
      family_name = "#{job.posted_job.first_name} #{job.posted_job.last_name}"
      sitter_name = "#{job.assignment.first_name} #{job.assignment.last_name}"
      date_time = "#{job.date} #{job.start_time.strftime("%I:%M %p")}"

      @upcoming_jobs << { "job_id" => job.id, "name" => family_name,
                          "sitter" => sitter_name, "confirmed" => job.confirmed,
                          "is_assigned" => job.is_assigned,
                          "submitted" => job.created_at.strftime("%m/%d/%Y %I:%M %p") }
    end

    return @upcoming_jobs
  end

  def self.show_job(options)
    job = Job.find(options)

    family_name = "#{job.posted_job.first_name} #{job.posted_job.last_name}"

    @new_job = { "name" => family_name, "family_id" => job.family_id,
                 "phone" => job.posted_job.phone_number,
                 "county" => job.posted_job.county,
                 "email" => job.posted_job.email,
                 "street" => job.posted_job.street,
                 "city" => job.posted_job.city, "state" => job.posted_job.state,
                 "zip_code" => job.posted_job.zip_code, "date" => job.date,
                 "start_time" => job.start_time.strftime("%I:%M %p"),
                 "end_time" => job.end_time.strftime("%I:%M %p"),
                 "date_posted" => job.created_at.strftime("%m/%d/%Y %I:%M %p"),
                 "notes" => job.notes, "job_id" => job.id,
                 "confirmed" => job.confirmed, "is_assigned" => job.is_assigned}

    if job.sitter_id
      @new_job["sitter_name"] = "#{job.assignment.first_name} #{job.assignment.last_name}"
      @new_job["sitter_id"] = job.sitter_id
    end

    return @new_job
  end

  def self.get_unassigned_jobs_count
    new_jobs = Job.where("date >= ?", Time.zone.now.beginning_of_day).where({confirmed: false, is_assigned: false, is_deleted: false}).all

    @jobs_no_sitter = []

    new_jobs.each do |job|
      if !job.sitter_id
        @jobs_no_sitter << job
      end
    end

    @jobs_count = @jobs_no_sitter.count

    return @jobs_count

  end

  def self.get_assigned_jobs_count
    new_jobs = Job.where("date >= ?", Time.zone.now.beginning_of_day).where({is_assigned: true, is_deleted: false}).all.count
  end

  def self.get_sitter_assigned_jobs_count(current_user)
    @sitter_assigned_jobs_count = Job.where("date >= ?", Time.zone.now.beginning_of_day).where( { is_assigned: true, sitter_id: current_user.id } ).all.count
  end

  def self.get_all_jobs_count
    all_jobs = Job.where("date >= ?", Time.zone.now.beginning_of_day).where(is_deleted: false).all.count
  end

  def self.assign_sitter_job(current_user, options)
    job = Job.find(options)

    job.sitter_id = current_user.id
    job.update_attribute(:is_assigned, true)
  end

  def self.get_sitter_jobs(current_user)
    jobs = Job.where("date >= ?", Time.zone.now.beginning_of_day).where( { is_assigned: true, sitter_id: current_user.id } ).all

    @job_details = []

    jobs.each do |job|
      family_name = "#{job.posted_job.first_name} #{job.posted_job.last_name}"
      @job_details << { "family_id" => job.family_id, "family_name" => family_name,
                        "date" => job.date, "confirmed" => job.confirmed,
                        "is_assigned" => job.is_assigned, "sitter_id" => job.sitter_id,
                        "start_time" => job.start_time.strftime("%I:%M %p"),
                        "end_time" => job.end_time.strftime("%I:%M %p"),
                        "notes" => job.notes, "job_id" => job.id}
    end

    return @job_details
  end

  def self.get_confirmed_sitter_jobs(current_user)
    jobs = Job.where("date >= ?", Time.zone.now.beginning_of_day).where({confirmed: true, is_assigned: true, sitter_id: current_user.id})

    @five_job_details = []

    jobs.each do |job|
      family_name = "#{job.posted_job.first_name} #{job.posted_job.last_name}"
      @five_job_details << { "family_id" => job.family_id, "family_name" => family_name,
                        "date" => job.date, "job_id" => job.id,
                        "confirmed" => job.confirmed, "sitter_id" => job.sitter_id,
                        "is_assigned" => job.is_assigned,
                        "start_time" => job.start_time.strftime("%I:%M %p"),
                        "end_time" => job.end_time.strftime("%I:%M %p"),
                        "notes" => job.notes}
    end

    return @five_job_details
  end

  def self.get_confirmed_family_jobs(current_user)
    jobs = Job.where("date >= ?", Time.zone.now.beginning_of_day).where( { confirmed: true, is_assigned: true, family_id: current_user.id } ).all

    @job_details = []

    jobs.each do |job|
      sitter_name = "#{job.assignment.first_name} #{job.assignment.last_name}"
      @job_details << { "family_id" => job.family_id, "sitter_id" => job.sitter_id,
                        "sitter_name" => sitter_name,
                        "confirmed" => job.confirmed,
                        "is_assigned" => job.is_assigned,
                        "date" => job.date, "job_id" => job.id,
                        "start_time" => job.start_time.strftime("%I:%M %p"),
                        "end_time" => job.end_time.strftime("%I:%M %p"),
                        "notes" => job.notes}
    end

    return @job_details
  end

  def self.get_pending_family_jobs(current_user)
    jobs = Job.where("date >= ?", Time.zone.now.beginning_of_day).where( { confirmed: false, family_id: current_user.id } ).all

    @job_details = []
    all_info = {}

    jobs.each do |job|
      all_info = { "family_id" => job.family_id,
                   "date" => job.date, "job_id" => job.id,
                   "start_time" => job.start_time.strftime("%I:%M %p"),
                   "end_time" => job.end_time.strftime("%I:%M %p"),
                   "notes" => job.notes, "confirmed" => job.confirmed,
                   "is_assigned" => job.is_assigned}

      if job.sitter_id
        sitter_name = "#{job.assignment.first_name} #{job.assignment.last_name}"
        all_info["sitter_name"] = sitter_name
        all_info["sitter_id"] = job.sitter_id
      end

      @job_details << all_info
    end

    return @job_details
  end

  def self.get_pending_sitter_jobs(current_user)
    jobs = Job.where("date >= ?", Time.zone.now.beginning_of_day).where( { confirmed: false, is_assigned: true, sitter_id: current_user.id } ).all

    @job_details = []

    jobs.each do |job|
      family_name = "#{job.posted_job.first_name} #{job.posted_job.last_name}"
      @job_details << { "family_id" => job.family_id, "family_name" => family_name,
                        "date" => job.date, "confirmed" => job.confirmed,
                        "is_assigned" => job.is_assigned,
                        "start_time" => job.start_time.strftime("%I:%M %p"),
                        "end_time" => job.end_time.strftime("%I:%M %p"),
                        "notes" => job.notes, "job_id" => job.id}
    end

    return @job_details
  end

  def self.get_pending_sitter_jobs_count(current_user)
    @pending_jobs_sitter_count = Job.where("date >= ?", Time.zone.now.beginning_of_day).where( { confirmed: false, is_assigned: true, sitter_id: current_user.id } ).all.count
  end

  def self.get_five_family_jobs(current_user)
    jobs = Job.where("date >= ?", Time.zone.now.beginning_of_day).where({confirmed: true, is_assigned: true, family_id: current_user.id}).limit(5)

    @five_job_details = []

    jobs.each do |job|
      family_name = "#{job.assignment.first_name} #{job.assignment.last_name}"
      sitter_name = "#{job.assignment.first_name} #{job.assignment.last_name}"
      @five_job_details << { "family_id" => job.family_id, "family_name" => family_name,
                        "sitter_id" => job.sitter_id, "sitter_name" => sitter_name,
                        "date" => job.date, "job_id" => job.id,
                        "confirmed" => job.confirmed,
                        "is_assigned" => job.is_assigned,
                        "start_time" => job.start_time.strftime("%I:%M %p"),
                        "end_time" => job.end_time.strftime("%I:%M %p"),
                        "notes" => job.notes}
    end

    return @five_job_details
  end

  def self.get_family_pending_jobs_count(current_user)
    @pending_jobs_count = Job.where("date >= ?", Time.zone.now.beginning_of_day).where( { family_id: current_user.id, is_assigned: true, confirmed: false } ).all.count
  end

  def self.get_family_confirmed_jobs_count(current_user)
    @confirmed_jobs_count = Job.where("date >= ?", Time.zone.now.beginning_of_day).where( { family_id: current_user.id, is_assigned: true, confirmed: true } ).all.count
  end

  def self.get_sitter_requested_jobs(current_user)
    requested_jobs = Job.where("date >= ?", Time.zone.now.beginning_of_day).where( { sitter_id: current_user.id, is_deleted: false, confirmed: false, is_assigned: false } ).all

    @jobs_details = []

    requested_jobs.each do |job|
      family_name = "#{job.posted_job.first_name} #{job.posted_job.last_name}"
      @jobs_details << { "job_id" => job.id, "family_id" => job.family_id,
                         "family_name" => family_name,
                         "sitter_id" => job.sitter_id, "date" => job.date,
                         "start_time" => job.start_time.strftime("%I:%M %p"),
                         "end_time" => job.end_time.strftime("%I:%M %p"),
                         "notes" => job.notes, "confirmed" => job.confirmed,
                         "is_assigned" => job.is_assigned,
                         "posted_on" => job.created_at.strftime("%m/%d/%Y %I:%M %p")}
    end

    return @jobs_details
  end

  def self.get_all_family_jobs(current_user)
    jobs = Job.where("date >= ?", Time.zone.now.beginning_of_day).where( { is_deleted: false, family_id: current_user.id } ).all

    @job_details = []
    all_info = {}

    jobs.each do |job|
      all_info = { "family_id" => job.family_id,
                        "date" => job.date, "job_id" => job.id,
                        "start_time" => job.start_time.strftime("%I:%M %p"),
                        "end_time" => job.end_time.strftime("%I:%M %p"),
                        "notes" => job.notes, "confirmed" => job.confirmed,
                        "is_assigned" => job.is_assigned}

      if job.sitter_id
        sitter_name = "#{job.assignment.first_name} #{job.assignment.last_name}"
        all_info["sitter_name"] = sitter_name
        all_info["sitter_id"] = job.sitter_id
      end

      @job_details << all_info
    end

    return @job_details
  end

end
