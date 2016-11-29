require 'rails_helper'

RSpec.describe "GET api/v1/sitters/available" do
  before do
    @agency = create(:user)
    @sitter_one = create(:recipient, is_deleted: false, active: true, approved: true)
    @sitter_two = create(:recipient, id: 3, email: "new@example.com",
      is_deleted: false, active: true, approved: true)
    sign_in @agency
  end

  it "returns an array of nannies" do

    get "/api/v1/sitters/available"

    expect(json_body.length).to eq 2
  end

  it 'returns only active nannies' do

    get "/api/v1/sitters/available"

    expect(json_body[0]["active"]).to eq true
  end

  it 'returns only approved nannies' do

    get "/api/v1/sitters/available"

    expect(json_body[0]["approved"]).to eq true
  end

  it 'only returns nannies who are not deleted' do

    get '/api/v1/sitters/available'

    expect(json_body[0]["is_deleted"]).to eq false
  end

  it 'will not return deleted nannies' do
    @sitter_one.is_deleted = true
    @sitter_one.save

    get '/api/v1/sitters/available'

    expect(json_body.length).to eq 1
  end

  it 'will not return users with role manager' do
    @sitter_one.role = 0
    @sitter_one.save

    get '/api/v1/sitters/available'

    expect(json_body.length).to eq 1
  end

end
