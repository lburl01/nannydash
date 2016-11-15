class Conversation < ApplicationRecord
  has_many :messages

  validates :subject, presence: true,
                      length: { maximum: 255 }
end
