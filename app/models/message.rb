class Message < ApplicationRecord
  belongs_to :conversation
  belongs_to :sender, :class_name => "User"
  belongs_to :recipient, :class_name => "User"

  validates_presence_of :sender

  def message_time
    created_at.strftime(“%m/%d/%y at %l:%M %p”)
  end
end
