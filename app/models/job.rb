class Job < ApplicationRecord
  belongs_to :user
  has_many :job_assignments
end
