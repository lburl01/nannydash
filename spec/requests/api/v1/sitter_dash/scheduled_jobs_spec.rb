require 'rails_helper'

RSpec.describe "GET sitter_dash/scheduled_jobs" do
  before do
    create(:user)
    sign_in create(:recipient)
    create(:family)
    create(:job)
    create(:assigned_job)
  end

  it "contains 10 key value pairs" do

    get "/sitter_dash/scheduled_jobs"

    expect(json_body.length).to eq 1
  end

  it "contains exactly the keys family_name, date, confirmed, is_assigned, " +
    "sitter_id, start_time, end_time, notes, job_id" do

    get "/sitter_dash/scheduled_jobs"

    expect(json_body[0].keys).to contain_exactly("confirmed", "date", "end_time",
      "family_id", "family_name", "is_assigned", "job_id", "notes", "sitter_id",
      "start_time")
  end
end
