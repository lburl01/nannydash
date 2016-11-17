class Job < ApplicationRecord
  belongs_to :user
  has_many :job_assignments

  validates_presence_of :date
end
