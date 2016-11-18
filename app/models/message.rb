class Message < ApplicationRecord
  belongs_to :conversation
  belongs_to :sent_message, :foreign_key => :user_id, class_name: 'User'
  belongs_to :received_message, :foreign_key => :recipient_id, class_name: 'User'

  # need to go back and make this specific to the user logged in (only their new messages)
  def self.get_latest_messages
    response = Message.order(created_at: :desc).limit(5)

    @messages = []

    response.each do |message|
      name = "#{message.sent_message.first_name} #{message.sent_message.last_name}"
      @messages << { "message_id" => message.id, "from" => name,
                     "subject" => message.subject, "is_read" => message.is_read }
    end

    return @messages

  end

# need to go back and make this specific to the user logged in (only their new messages)
  def self.get_new_messages_count
    new_messages = Message.where( { is_deleted: false, is_read: false } ).all.count

    if new_messages == 0
      return 0
    else
      return new_messages
    end

  end

end
