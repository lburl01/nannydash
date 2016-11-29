require 'rails_helper'

RSpec.describe SittersController, type: :controller do
  include Devise::Test::ControllerHelpers
  
  describe "GET #index" do
    it 'returns an array of json sitter objects and an array of unique counties' do
      @user = create(:user, role: 2)

      get :index

      expect(json_body.length).to eq 2
    end

    it 'will not return deleted sitters' do
      @user = create(:user, is_deleted: true)

      get :index

      expect(json_body["sitters"].length).to eq 0
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

  describe "PATCH #toggle_approved_sitter" do
    it 'toggles the approved column value' do
      @user = create(:user)

      expect(@user.approved).to eq false

      process :toggle_approved_sitter, method: :patch, params: { id: @user.id }

      @user.reload

      expect(@user.approved).to eq true

    end
  end

end
