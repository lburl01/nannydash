require "rails_helper"

RSpec.describe Conversation, :type => :model do
  before do
    @sender = create(:user)
    @recipient = create(:recipient)
    @conversation = build(:conversation)
  end

  it 'is valid' do
    expect(@conversation).to be_valid
  end

  it 'is invalid without a sender' do
    @conversation.sender_id = ""

    expect(@conversation).to_not be_valid
  end

  it 'is invalid without a recipient' do
    @conversation.recipient_id = ''

    expect(@conversation).to_not be_valid
  end

  it 'is invalid without a subject' do
    @conversation.subject = ''

    expect(@conversation).to_not be_valid
  end

  it 'is invalid if sender and recipient are the same' do
    @conversation.sender_id = 1
    @conversation.recipient_id = 1

    expect(@conversation).to_not be_valid
  end

  it 'exists once per sender/recipient pair' do
    @conversation_2 = build(:conversation)

    expect(@conversation_2).to_not be_valid
  end
end
