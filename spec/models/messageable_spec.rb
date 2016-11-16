require "rails_helper"

RSpec.describe Messageable do
  before do
    @user.extend(Messageable)
  end

  it "will create a new conversation and message" do
    @sender = build(:user)
    @recipient = build(:recipient)
    subject = "Subject Line"
    body = "Lots of text goes here"


    expect{@sender.send_message(@recipient, body, subject)}.to \
      change{ [Conversation.count, Message.count] }.from([0,0]).to([1,1])
    # expect{@sender.send_message(@recipient, body, subject)}.to \
      # change{Message.count}.from(0).to(1)
  end

end
