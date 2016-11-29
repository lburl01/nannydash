require 'rails_helper'

RSpec.describe "GET family_dash/5_confirmed_jobs" do
  before do
    create(:user)
    @family = create(:family)
    sign_in @family
    create(:recipient)
    create(:job)
    create(:assigned_job, family_id: @family.id, confirmed: true, is_assigned: true)
    create(:assigned_job, id: 3, family_id: @family.id, confirmed: true, is_assigned: true)
    create(:assigned_job, id: 4, family_id: @family.id, confirmed: true, is_assigned: true)
    create(:assigned_job, id: 5, family_id: @family.id, confirmed: true, is_assigned: true)
    create(:assigned_job, id: 6, family_id: @family.id, confirmed: true, is_assigned: true)
  end

  it "returns not more than five jobs" do

    get "/family_dash/5_confirmed_jobs"

    expect(json_body.length).to eq 5
  end

  it "contains exactly the keys confirmed, date, end_time, family_id, " +
    "family_name, is_assigned, job_id, notes, sitter_id, sitter_name, start_time" do

    get "/family_dash/5_confirmed_jobs"

    expect(json_body[0].keys).to contain_exactly("confirmed", "date", "end_time",
      "family_id", "family_name", "is_assigned", "job_id", "notes", "sitter_id",
      "sitter_name", "start_time")
  end

  it 'only returns is_assigned: true jobs' do

    get "/family_dash/5_confirmed_jobs"

    expect(json_body[0]["is_assigned"]).to eq true
  end

  it 'only returns confirmed: true jobs' do

    get "/family_dash/5_confirmed_jobs"

    expect(json_body[0]["confirmed"]).to eq true
  end

  it 'only returns jobs for logged in family' do

    get '/family_dash/5_confirmed_jobs'

    expect(json_body[0]["family_id"]).to eq @family.id
  end
end
