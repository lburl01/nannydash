class Message < ApplicationRecord
  belongs_to :conversation
  belongs_to :sent_message, :foreign_key => :user_id, class_name: 'User'
  belongs_to :received_message, :foreign_key => :recipient_id, class_name: 'User'

  def self.get_latest_messages
    response = Message.order(:created_at).limit(5)

    @messages = []

    response.each do |message|
      name = "#{message.sent_message.first_name} #{message.sent_message.last_name}"
      @messages << { "from" => name }
    end
    return @messages
  end

end
