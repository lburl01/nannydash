require 'rails_helper'

RSpec.describe DashboardController, type: :controller do
  include Devise::Test::ControllerHelpers

  context 'when user not logged in' do
    describe "GET #index" do
      it "redirects to login page view" do

        get :index

        expect(response).to redirect_to("/users/sign_in")
      end
    end
  end

end
