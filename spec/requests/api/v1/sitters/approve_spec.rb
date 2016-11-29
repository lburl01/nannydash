require 'rails_helper'

RSpec.describe "PATCH api/v1/sitter/approve/:id" do
  before do
    @sitter = create(:recipient, approved: false)
  end

  it "toggles approved status of record" do

    patch "/api/v1/sitter/approve/#{@sitter.id}"

    @sitter.reload

    expect(@sitter.approved).to eq true
  end

end
