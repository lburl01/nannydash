class Job < ApplicationRecord
  # belongs_to :user
  belongs_to :posted_job, :class_name => "Job", foreign_key: "family_id"
  belongs_to :assignment, :class_name => "Job", foreign_key: "sitter_id"

  def self.get_assigned_jobs
    response = Job.where(is_deleted: false).where(is_assigned: true).all

    @jobs = []

    response.each do |job|
      debugger
      @jobs << { "job_id" => job.id,
                 "family_first_name" => job.posted_job.first_name
               }
    end

    return @jobs
  end
end
