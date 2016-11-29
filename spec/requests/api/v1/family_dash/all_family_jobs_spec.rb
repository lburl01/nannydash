require 'rails_helper'

RSpec.describe "GET family_dash/all_family_jobs" do
  before do
    create(:user)
    @family = create(:family)
    sign_in @family
    create(:recipient)
    @job = create(:job, family_id: @family.id)
    @assigned_job = create(:assigned_job, family_id: @family.id, confirmed: true, is_assigned: true)
  end

  it "returns array with two items" do

    get "/family_dash/all_family_jobs"

    expect(json_body.length).to eq 2
  end

  it "contains exactly the keys confirmed, date, end_time, family_id, " +
    "is_assigned, is_deleted, job_id, notes, start_time" do

    get "/family_dash/all_family_jobs"

    expect(json_body[0].keys).to contain_exactly("confirmed", "date", "end_time",
      "family_id", "is_assigned", "is_deleted", "job_id", "notes", "start_time")
  end

  it 'only returns is_deleted: false jobs' do

    get "/family_dash/all_family_jobs"

    expect(json_body[0]["is_deleted"]).to eq false
  end

  it 'only returns jobs for logged in family' do
    get '/family_dash/all_family_jobs'

    expect(json_body[0]["family_id"]).to eq @family.id
  end

  context 'it has a sitter assigned' do
    it "contains exactly the keys confirmed, date, end_time, family_id, " +
      "is_assigned, is_deleted, job_id, notes, start_time, sitter_name, sitter_id" do

      get "/family_dash/all_family_jobs"

      expect(json_body[1].keys).to contain_exactly("confirmed", "date", "end_time",
        "family_id", "is_assigned", "is_deleted", "job_id", "notes", "start_time",
        "sitter_name", "sitter_id")
    end
  end
end
