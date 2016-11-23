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

  it 'is invalid without a family' do
    @job.family_id = ""

    expect(@job).to_not be_valid
  end

  it 'is invalid without a start_time' do
    @job.start_time = ''

    expect(@job).to_not be_valid
  end

  it 'is invalid without an end_time' do
    @job.end_time = ''

    expect(@job).to_not be_valid
  end
end
