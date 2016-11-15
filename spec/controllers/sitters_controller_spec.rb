require 'rails_helper'

RSpec.describe SittersController, type: :controller do

  describe "GET #index" do
    it 'returns an array of json objects' do
      @user = create(:user, role: 2)

      get :index

      json = JSON.parse(response.body)

      expect(json.length).to eq 1
    end
  end

end
