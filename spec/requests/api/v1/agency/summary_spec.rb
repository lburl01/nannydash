require 'rails_helper'

RSpec.describe "GET /api/v1/agency/summary" do
  it "returns counts of messages, pending sitter and " +
  "family applications, assignments and open jobs" do
    
    wanted_keys = ["messages", "applications", "assignments", "open_jobs"]

    get '/api/v1/agency/summary'

    expect(json_body.keys).to contain_exactly(wanted_keys)
  end
end
