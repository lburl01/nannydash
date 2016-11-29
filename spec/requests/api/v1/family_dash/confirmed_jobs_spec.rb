require 'rails_helper'

RSpec.describe "GET family_dash/confirmed_jobs" do
  before do
    create(:user)
    @family = create(:family)
    sign_in @family
    create(:recipient)
    create(:job)
    create(:assigned_job, family_id: @family.id, confirmed: true, is_assigned: true)
  end

  it "returns array with one item" do

    get "/family_dash/confirmed_jobs"

    expect(json_body.length).to eq 1
  end

  it "contains exactly the keys confirmed, date, end_time, family_id, " +
    "is_assigned, job_id, notes, sitter_id, sitter_name, start_time" do

    get "/family_dash/confirmed_jobs"

    expect(json_body[0].keys).to contain_exactly("confirmed", "date", "end_time",
      "family_id", "is_assigned", "job_id", "notes", "sitter_id", "sitter_name",
      "start_time")
  end

  it 'only returns is_assigned: true jobs' do

    get "/family_dash/confirmed_jobs"

    expect(json_body[0]["is_assigned"]).to eq true
  end

  it 'only returns confirmed: true jobs' do

    get "/family_dash/confirmed_jobs"

    expect(json_body[0]["confirmed"]).to eq true
  end

  it 'only returns jobs for logged in family' do

  end
end
