module Messageable

  def send_message(recipient, msg_body, subject)
      convo = Conversation.create!({
        :subject      => subject,
        :created_at   => Time.now,
        :updated_at   => Time.now,
        :recipient => recipient,
        :sender    => self,
        :is_deleted   => false
      })

      message = Message.create!({
        :user_id         => self.id,
        :recipient_id    => recipient.id,
        :conversation_id => convo.id,
        :body            => msg_body,
        :is_read         => false,
        :is_deleted      => false,
        :subject         => subject,
        :created_at      => Time.now,
        :updated_at      => Time.now
      })

    end

end
