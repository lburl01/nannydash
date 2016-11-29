require 'rails_helper'

RSpec.describe "GET api/v1/sitter/:id" do
  before do
    @sitter = create(:recipient)
    sign_in @sitter
  end

  it "returns information on specific sitter" do

    get "/api/v1/sitter/#{@sitter.id}"

    expect(json_body["first_name"]).to eq "Miles"
  end

end
