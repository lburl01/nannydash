require 'rails_helper'

RSpec.describe ConversationsController, type: :controller do
  context 'when logged in as agency manager' do
    describe "GET #index" do
      it "returns http success" do
        get :index
        expect(response).to have_http_status(:success)
      end
    end
  end
end
