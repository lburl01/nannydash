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

  describe "PATCH #toggle_deleted_sitter" do
    it 'toggles the is_deleted column value' do
      @user = create(:user)

      expect(@user.is_deleted).to eq false

      process :toggle_deleted_sitter, method: :patch, params: { id: @user.id }

      @user.reload

      expect(@user.is_deleted).to eq true

    end
  end

end
