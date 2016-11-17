require "rails_helper"

RSpec.describe Job, :type => :model do
  before do
    @user = create(:user, role: 1)
    @job = build(:job)
  end

  it 'is valid' do
    expect(@job).to be_valid
  end

  it 'is invalid without a date' do
    @job.date = ""

    expect(@job).to_not be_valid
  end

  it 'is invalid without a user' do
    @job.user_id = ""

    expect(@job).to_no be_valid
  end
end
