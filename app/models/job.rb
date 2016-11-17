class Job < ApplicationRecord
  belongs_to :posted_job, :foreign_key => :family_id, class_name: 'User'
  belongs_to :assignment, :foreign_key => :sitter_id, class_name: 'User'

  def self.get_assigned_jobs
    response = Job.where(is_deleted: false).where(is_assigned: true).all

    @jobs = []

    response.each do |job|
      @jobs << { "job_id" => job.id, "family_id" => job.family_id,
                 "family_first_name" => job.posted_job.first_name,
                 "family_last_name" => job.posted_job.last_name,
                 "sitter_first_name" => job.assignment.first_name,
                 "sitter_last_name" => job.assignment.last_name,
                 "start_time" => job.start_time.strftime("%I:%M %p"),
                 "end_time" => job.end_time.strftime("%I:%M %p"),
                 "confirmed" => job.confirmed,
                 "created" => job.created_at.strftime("%m/%d/%Y %I:%M %p")
               }
    end

    return @jobs
  end
end
