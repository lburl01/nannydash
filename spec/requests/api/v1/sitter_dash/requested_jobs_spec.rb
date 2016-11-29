require 'rails_helper'

RSpec.describe "GET sitter_dash/requested_jobs" do
  before do
    create(:user)
    sign_in create(:recipient)
    create(:family)
    create(:job)
    create(:assigned_job, confirmed: false, is_assigned: false)
  end

  it "returns array with one item" do

    get "/sitter_dash/requested_jobs"

    expect(json_body.length).to eq 1
  end

  it "contains exactly the keys confirmed, date, end_time, family_id, " +
    "family_name, is_assigned, job_id, notes, posted_on, sitter_id, " +
    "start_time, is_deleted" do

    get "/sitter_dash/requested_jobs"

    expect(json_body[0].keys).to contain_exactly("confirmed", "date", "end_time",
      "family_id", "family_name", "is_assigned", "job_id", "notes", "posted_on",
      "sitter_id", "start_time", "is_deleted")
  end

  it 'only returns is_assigned: false jobs' do

    get "/sitter_dash/requested_jobs"

    expect(json_body[0]["is_assigned"]).to eq false
  end

  it 'only returns is_assigned: false jobs' do

    get "/sitter_dash/requested_jobs"

    expect(json_body[0]["is_assigned"]).to eq false
  end

  it 'only returns confirmed: false jobs' do

    get "/sitter_dash/requested_jobs"

    expect(json_body[0]["confirmed"]).to eq false
  end

  it 'only returns is_deleted: false jobs' do

    get "/sitter_dash/requested_jobs"

    expect(json_body[0]["is_deleted"]).to eq false
  end
end
