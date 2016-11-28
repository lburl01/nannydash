require 'rails_helper'

RSpec.describe "GET sitter_dash/counts" do
  before do
    sign_in create(:user)
  end

  it "contains 5 key value pairs" do

    get "/sitter_dash/counts"

    expect(json_body.length).to eq 5
  end

  it "contains exactly the keys all_families, unassigned_jobs, assigned_jobs, " +
     "new_messages, pending_jobs" do

    get "/sitter_dash/counts"

    expect(json_body.keys).to contain_exactly("all_families", "unassigned_jobs",
      "assigned_jobs", "new_messages", "pending_jobs")
  end
end
