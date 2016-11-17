class Job < ApplicationRecord
  belongs_to :user

  def self.get_assigned_jobs
    response = Job.where(is_deleted: false).where(is_assigned: true).all

    @jobs = []

    response.each do |job|
      @jobs << { "job_id" => job.id, "famliy_first_name" => job.user.first_name,
                "family_last_name" => job.user.last_name
      }
    end

    return @jobs
  end
end
