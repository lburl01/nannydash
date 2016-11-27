require 'rails_helper'

RSpec.describe "GET api/v1/agency/application/:id" do
  before do
    sign_in create(:user)
    @recipient = create(:recipient)
  end

  it "shows details about specific user application" do

    get "/api/v1/agency/application/#{@recipient.id}"

    expect(json_body["first_name"]).to eq "Miles"
  end
end
