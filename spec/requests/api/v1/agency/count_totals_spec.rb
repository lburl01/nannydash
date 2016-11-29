require 'rails_helper'

RSpec.describe "GET api/v1/agency/count_totals" do
  before do
    sign_in create(:user)
  end

  it "contains 5 key value pairs" do

    get "/api/v1/agency/count_totals"

    expect(json_body.length).to eq 5
  end

  it "contains exactly the keys pending_families, pending_sitters, new_jobs, " +
     "all_jobs, and new_messages" do

    get "/api/v1/agency/count_totals"

    expect(json_body.keys).to contain_exactly("pending_families",
      "pending_sitters", "new_jobs", "all_jobs", "new_messages")
  end
end
