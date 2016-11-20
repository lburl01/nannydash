require 'rails_helper'

RSpec.describe AgencyController, type: :controller do
  describe "GET agency#index" do
    it 'returns correct json keys' do
      sitter = build(:user)
      family = build(:family)
      open_job = build(:job)
      assigned_job = build(:assigned_job)
      conversation = build(:conversation)
      message = build(:message)

      wanted_keys = ["messages", "applications", "assignments", "open_jobs"]

      get :index

      json = JSON.parse(response.body)
      
      expect(json.keys).to contain_exactly(wanted_keys)
    end
  end
end
