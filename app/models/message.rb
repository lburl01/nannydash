class Message < ApplicationRecord
  belongs_to :conversation
  belongs_to :user, :foreign_key => :sender_id, class_name: 'User'

end
