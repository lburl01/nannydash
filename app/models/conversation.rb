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
    data = Conversation.where({sender_id: current_user.id, is_deleted: false}).or(Conversation.where({recipient_id: current_user.id, is_deleted: false})).order(created_at: :desc).all

    @conversations = []

    data.each do |convo|
      sender_name = "#{convo.sender.first_name} #{convo.sender.last_name}"
      recipient_name = "#{convo.recipient.first_name} #{convo.recipient.last_name}"

      @conversations << { "sender_id" => convo.sender_id, "convo_id" => convo.id,
        "subject" => convo.subject, "recipient_id" => convo.recipient_id,
        "created_at" => convo.created_at.strftime("%m/%d/%Y %I:%M %p"),
        "sender_name" => sender_name, "sender_read" => convo.sender_read,
        "recipient_read" => convo.recipient_read,
        "recipient_name" => recipient_name, "messages_count" => convo.messages.where(is_deleted: false).count}
    end

    return @conversations
  end

  def self.get_conversation(options, current_user)
    convo = Conversation.find(options)

    if convo.sender_id == current_user.id
      convo.update_attribute(:sender_read, true)
    elsif convo.recipient_id == current_user.id
      convo.update_attribute(:recipient_read, true)
    end

    sender_name = "#{convo.sender.first_name} #{convo.sender.last_name}"
    recipient_name = "#{convo.recipient.first_name} #{convo.recipient.last_name}"

    @conversation = { "id" => convo.id, "subject" => convo.subject,
                      "sender_id" => convo.sender_id, "sender_name" => sender_name,
                      "recipient_id" => convo.recipient_id,
                      "recipient_name" => recipient_name, "sender_read" => convo.sender_read,
                      "recipient_read" => convo.recipient_read,
                      "created_at" => convo.created_at.strftime("%m/%d/%Y %I:%M %p")}
  end

  private

    def check_sender_recipient
      errors.add(:recipient, "can't be the same as sender") if sender_id == recipient_id
    end

end
