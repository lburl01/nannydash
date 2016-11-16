class Message < ApplicationRecord
  belongs_to :conversation
  belongs_to :user, :foreign_key => :sender_id, class_name: 'User'

  # def message_time
  #   created_at.strftime(“%m/%d/%y at %l:%M %p”)
  # end
end
