module Messageable

  def send_message(recipient, msg_body, subject)
      convo = Conversation.where({recipient_id: self, sender_id: recipient}).or(Conversation.where({recipient_id: self, sender_id: recipient})).first

      if convo.nil?
        convo = Conversation.create!(
          recipient: recipient,
          sender: self,
          subject: subject
        )
      end

      message = Message.create!({
        :user_id         => self.id,
        :recipient_id    => recipient.id,
        :conversation_id => convo.id,
        :body            => msg_body,
        :subject         => subject
      })

    end

end
