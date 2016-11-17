class Job < ApplicationRecord
  belongs_to :user

  def self.get_assigned_jobs
    response = Job.where(is_deleted: false).where(is_assigned: true).all

    @jobs = []

    response.each do |job|
      @jobs << { "job_id" => job.id
      }
    end

    return @jobs
  end
end
