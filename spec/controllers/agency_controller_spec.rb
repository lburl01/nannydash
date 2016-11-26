require 'rails_helper'

RSpec.describe AgencyController, type: :controller do
  describe "GET agency#index" do
    it 'returns correct json keys' do
      @current_user = build(:user)

      wanted_keys = ["messages", "applications", "assignments", "open_jobs"]

      get :index

      expect(json_body.keys).to contain_exactly(wanted_keys)
    end
  end
end
