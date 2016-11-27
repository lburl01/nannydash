require 'rails_helper'

RSpec.describe "GET /api/v1/agency/summary" do
  before do
    sign_in create(:user)
  end

  it "returns counts of messages, pending sitter and " +
  "family applications, assignments and open jobs" do

    get '/api/v1/agency/summary'

    expect(json_body.keys).to contain_exactly("applications", "assignments", "messages", "open_jobs")
  end

end
