class Message < ApplicationRecord
  belongs_to :conversation
  belongs_to :sent_message, :foreign_key => :user_id, class_name: 'User'
  belongs_to :received_message, :foreign_key => :recipient_id, class_name: 'User'

  validates_presence_of :body, :subject

  validates :subject, length: { maximum: 255 }

  def self.get_latest_messages(current_user)
    response = Message.where(recipient_id: current_user.id).order(created_at: :desc).limit(5)

    @messages = []

    response.each do |message|
      name = "#{message.sent_message.first_name} #{message.sent_message.last_name}"
      @messages << { "message_id" => message.id, "from" => name,
                     "subject" => message.subject, "is_read" => message.is_read }
    end

    return @messages

  end

  def self.get_new_messages_count(current_user)
    new_messages = Message.where( { recipient_id: current_user.id, is_deleted: false, is_read: false } ).all.count

  end

end
