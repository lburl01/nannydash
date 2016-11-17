class Job < ApplicationRecord
  belongs_to :user

  def self.get_assigned_jobs
    response = Job.where(is_deleted: false).where(is_assigned: true).all

    @jobs = []

    response.each do |job|
      @jobs << { "job_id" => job.id,
                 "family_first_name" => User.find(job.family_id).first_name
               }
    end

    return @jobs
  end
end
