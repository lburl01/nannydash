class Message < ApplicationRecord
  belongs_to :conversation
  
  validates_presence_of :sender
end
