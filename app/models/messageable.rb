module Messageable

  def send_message(recipient, msg_body, subject)
      convo = Conversation.create!({
        :subject      => subject,
        :created_at   => Time.now,
        :updated_at   => Time.now,
        :recipient_id => recipient.id,
        :sender_id    => self.id
      })

      message = Message.create!({
        :sender_id       => self.id,
        :sender_type     => self.class,
        :recipient_id    => convo.recipient_id,
        :conversation_id => convo.id,
        :body            => msg_body,
        :subject         => subject,
        :created_at      => Time.now,
        :updated_at      => Time.now
      })

    end

end
