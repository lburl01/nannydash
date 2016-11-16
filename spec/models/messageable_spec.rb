require "rails_helper"

RSpec.describe Messageable do
  before do
    @user.extend(Messageable)
  end

  it "will create a new conversation" do
    @sender = build(:user)
    @recipient = build(:recipient)
    subject = "Subject Line"
    body = "Lots of text goes here"

    expect{@sender.send_message(@recipient, body, subject)}.to \
      change{ Conversation.count }.from(0).to(1)
  end

  it "will create a new message" do
    @sender = build(:user, id: 3)
    @recipient = build(:recipient, id: 4)
    subject = "Subject Line"
    body = "Lots of text goes here"

    expect{@sender.send_message(@recipient, body, subject)}.to \
      change{ Message.count }.from(0).to(1)
  end

end
