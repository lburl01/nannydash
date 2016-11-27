require 'rails_helper'

RSpec.describe "GET user/logged_in" do
  before do
    sign_in create(:user)
  end

  it "shows details about logged in user" do

    get "/user/logged_in"

    expect(json_body["first_name"]).to eq "Ellis"
  end
end
