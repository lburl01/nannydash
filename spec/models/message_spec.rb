require "rails_helper"

RSpec.describe Message, :type => :model do
  before do
    @sender = create(:user)
    @recipient = create(:recipient)
    @conversation = create(:conversation)
    @message = build(:message)
  end

  it 'is valid' do
    expect(@message).to be_valid
  end

  it 'is invalid without a body' do
    @message.body = ''

    expect(@message).to_not be_valid
  end

  it 'is invalid without a recipient_id' do
    @message.recipient_id = ''

    expect(@message).to_not be_valid
  end

  it 'is invalid without a subject' do
    @message.subject = ''

    expect(@message).to_not be_valid
  end

  it 'is invalid without a user_id' do
    @message.user_id = ''

    expect(@message).to_not be_valid
  end

  it 'is invalid without a conversation_id' do
    @message.conversation_id = ''

    expect(@message).to_not be_valid
  end

  it 'is invalid with a conversation_id that does not exist' do
    @message.conversation_id = 5

    expect(@message).to_not be_valid
  end

  it 'subject line should be not be too long' do
    @message.subject = "a" * 256

    expect(@message).to_not be_valid
  end
end
