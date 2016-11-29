require 'rails_helper'

RSpec.describe "GET sitter_dash/confirmed_jobs" do
  before do
    create(:user)
    @sitter = create(:recipient)
    sign_in @sitter
    create(:family)
    create(:job)
    create(:assigned_job, sitter_id: @sitter.id, confirmed: true, is_assigned: true)
  end

  it "returns array with one item" do

    get "/sitter_dash/confirmed_jobs"

    expect(json_body.length).to eq 1
  end

  it "contains exactly the keys confirmed, date, end_time, family_id, " +
    "family_name, is_assigned, job_id, notes, sitter_id, " +
    "start_time" do

    get "/sitter_dash/confirmed_jobs"

    expect(json_body[0].keys).to contain_exactly("confirmed", "date", "end_time",
      "family_id", "family_name", "is_assigned", "job_id", "notes", "sitter_id",
      "start_time")
  end

  it 'only returns is_assigned: true jobs' do

    get "/sitter_dash/confirmed_jobs"

    expect(json_body[0]["is_assigned"]).to eq true
  end

  it 'only returns confirmed: true jobs' do

    get "/sitter_dash/confirmed_jobs"

    expect(json_body[0]["confirmed"]).to eq true
  end
end
