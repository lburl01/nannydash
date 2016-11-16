require 'rails_helper'

RSpec.describe SittersController, type: :controller do

  describe "GET #index" do
    it 'returns an array of json objects' do
      @user = create(:user, role: 2)

      get :index

      json = JSON.parse(response.body)

      expect(json.length).to eq 1
    end

    it 'will not return deleted sitters' do
      @user = create(:user, is_deleted: true)

      get :index

      json = JSON.parse(response.body)

      expect(json.length).to eq 0
    end
  end

end
