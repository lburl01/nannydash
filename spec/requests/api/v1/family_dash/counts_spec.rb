require 'rails_helper'

RSpec.describe "GET family_dash/counts" do
  before do
    sign_in create(:user)
  end

  it "contains 4 key value pairs" do

    get "/family_dash/counts"

    expect(json_body.length).to eq 4
  end

  it "contains exactly the keys pending_jobs, confirmed_jobs, new_messages, " +
     "all_sitters" do

    get "/family_dash/counts"

    expect(json_body.keys).to contain_exactly("pending_jobs", "confirmed_jobs",
      "new_messages", "all_sitters")
  end
end
