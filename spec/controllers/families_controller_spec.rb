require 'rails_helper'

RSpec.describe FamiliesController, type: :controller do
  include Devise::Test::ControllerHelpers
  
  describe "PATCH #toggle_active_family" do
    it 'toggles the active column value' do
      @user = create(:user)

      expect(@user.active).to eq false

      process :toggle_active_family, method: :patch, params: { id: @user.id }

      @user.reload

      expect(@user.active).to eq true

    end
  end

  describe "GET #index" do
    it 'returns an array of json objects' do
      @user_one = create(:user, role: 1, approved: true)
      @user_two = create(:recipient, role: 1, approved: true)

      get :index

      expect(json_body.length).to eq 2
    end

    it 'will not return deleted families' do
      @user = create(:user, is_deleted: true)

      get :index

      expect(json_body["families"].length).to eq 0
    end
  end

  describe "GET #show" do
    it 'returns one json object' do
      @user = create(:user)

      process :show, method: :get, params: { id: @user.id }

      expect(json_body["family_id"]).to eq 1
    end
  end

  describe "PATCH #update" do
    it 'updates a record' do
      @user = create(:user)

      process :update, method: :patch, params: { id: @user.id, user: { "first_name" => "Lori" } }

      @user.reload

      expect(@user.first_name).to eq "Lori"
    end
  end

  describe "PATCH #toggle_deleted_family" do
    it 'toggles the is_deleted column value' do
      @user = create(:user)

      expect(@user.is_deleted).to eq false

      process :toggle_deleted_family, method: :patch, params: { id: @user.id }

      @user.reload

      expect(@user.is_deleted).to eq true

    end
  end

  describe "PATCH #toggle_approved_family" do
    it 'toggles the approved column value' do
      @user = create(:user)

      expect(@user.approved).to eq false

      process :toggle_approved_family, method: :patch, params: { id: @user.id }

      @user.reload

      expect(@user.approved).to eq true

    end
  end

end
