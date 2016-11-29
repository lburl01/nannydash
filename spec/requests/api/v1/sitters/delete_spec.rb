require 'rails_helper'

RSpec.describe "PATCH api/v1/sitter/delete/:id" do
  before do
    @sitter = create(:recipient)
  end

  it "toggles is_deleted for record" do

    patch "/api/v1/sitter/delete/#{@sitter.id}"

    @sitter.reload

    expect(@sitter.is_deleted).to eq true
  end

end
