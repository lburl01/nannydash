class Conversation < ApplicationRecord

  belongs_to :sender, :foreign_key => :sender_id, class_name: 'User'
  belongs_to :recipient, :foreign_key => :recipient_id, class_name: 'User'
  has_many :messages, dependent: :destroy

  validate :check_sender_recipient
  validates_uniqueness_of :sender_id, scope: :recipient_id
  validates_presence_of :sender_id, :recipient_id, :subject
  validates :subject, presence: true,
                      length: { maximum: 255 }

  def self.get_user_conversations(current_user)
    @conversations = Conversation.where(sender_id: current_user.id).or(Conversation.where(recipient_id: current_user.id)).all
  end

  private
  
    def check_sender_recipient
      errors.add(:recipient, "can't be the same as sender") if sender_id == recipient_id
    end

end
