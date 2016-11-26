require 'rails_helper'

RSpec.describe NannyDashboardController, type: :controller do

  context 'when user not logged in' do
    describe "GET #index" do
      it "redirects to login page view" do

        get :index

        expect(response).to redirect_to("/users/sign_in")
      end
    end
  end

  context 'when nanny logged in' do
    describe "GET #get_all_counts" do
      it 'returns json object with 5 correct keys' do
        @nanny = create(:recipient)

        wanted_keys = ["all_families", "unassigned_jobs",
                       "assigned_jobs", "new_messages", "pending_jobs"]

        login(@nanny)
        get :get_all_counts

        json = JSON.parse(response.body)

        expect(json.keys).to contain_exactly(wanted_keys)

      end
    end
  end

end
