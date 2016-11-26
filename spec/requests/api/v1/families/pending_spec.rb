require 'rails_helper'

RSpec.describe "GET /api/v1/families/pending" do
  before do
    @family = create(:family)
    sign_in create(:user)
  end

  it "returns families that are active" do
    get '/api/v1/families/pending'

    expect(json_body["families"][0]["active"]).to eq true
  end

  it "returns families that are not deleted" do
    get '/api/v1/families/pending'

    expect(json_body["families"][0]["is_deleted"]).to eq false
  end

  it "returns families that are not yet approved" do
    get '/api/v1/families/pending'

    expect(json_body["families"][0]["approved"]).to eq false
  end

end
