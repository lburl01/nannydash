require 'rails_helper'

RSpec.describe "GET sitter_dash/scheduled_jobs" do
  before do
    sign_in create(:recipient)
  end

  it "contains 10 key value pairs" do

    get "/sitter_dash/scheduled_jobs"
debugger
    expect(json_body.length).to eq 10
  end

  it "contains exactly the keys family_name, date, confirmed, is_assigned, " +
    "sitter_id, start_time, end_time, notes, job_id" do

    get "/sitter_dash/scheduled_jobs"

    expect(json_body.keys).to contain_exactly("family_name", "date", "confirmed",
      "is_assigned", "sitter_id", "start_time", "end_time", "notes", "job_id")
  end
end
