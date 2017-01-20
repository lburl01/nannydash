module Messageable

  def send_message(recipient, msg_body, subject)
      convo = Conversation.where({recipient_id: self.id, sender_id: recipient.id}).or(Conversation.where({recipient_id: recipient.id, sender_id: self.id})).first

      if convo.nil?
        convo = Conversation.create!(
          recipient: recipient,
          recipient_read: false,
          sender_read: true,
          sender: self,
          subject: subject
        )
      else
        if convo.sender_id == self.id
          convo.update_attributes(sender_read: true, recipient_read: false)
        else
          convo.update_attributes(sender_read: false, recipient_read: true)
        end
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
