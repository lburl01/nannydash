module Messageable

  def send_message(recipient, msg_body, subject)
      convo = Conversation.create({
        :subject    => subject,
        :created_at => Time.now,
        :updated_at => Time.now,
        :recipient_id => recipient,
        :sender_id => self.id
      })

      message = Message.create({
        :sender       => self,
        :conversation => convo,
        :recipient    => recipient,
        :body         => msg_body,
        :subject      => subject,
        :created_at   => Time.now,
        :updated_at   => Time.now
      })

    end

end
