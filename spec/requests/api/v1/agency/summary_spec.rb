require 'rails_helper'

RSpec.describe "GET /api/v1/agency/summary" do

  it "returns counts of messages, pending sitter and " +
  "family applications, assignments and open jobs" do
    current_user = create(:user)

    sign_in(current_user)
    get '/api/v1/agency/summary'

    expect(json_body.keys).to contain_exactly("applications", "assignments", "messages", "open_jobs")
  end
end
