require 'rails_helper'

RSpec.describe AgencyController, type: :controller do
  include Devise::Test::ControllerHelpers

  describe "GET agency#index" do
    it 'returns correct json keys' do
      @current_user = build(:user)

      get :index

      expect(json_body.keys).to contain_exactly("applications", "assignments", "messages", "open_jobs")
    end
  end
end
