require 'rails_helper'

RSpec.describe FamiliesController, type: :controller do

  describe "PATCH #toggle_active_family" do
    it 'toggles the active column value' do
      @user = create(:user)

      expect(@user.active).to eq false

      patch :toggle_active_family, id: @user.id
      @user.reload

      expect(@user.active).to eq true

    end
  end

  describe "GET #index" do
    it 'returns an array of json objects' do
      user_one = create(:user, role: 1, approved: true)
      user_two = create(:recipient, role: 1, approved: true)

      get :index

      json = JSON.parse(response.body)

      expect(json.length).to eq 2
    end
  end

  describe "GET #show" do
    it 'returns one json object' do
      @user = create(:user)

      get :show, params: { id: @user.id }

      json = JSON.parse(response.body)

      expect(json["family_id"]).to eq 1
    end
  end

  describe "PATCH #update" do
    it 'updates a record' do
      @user = create(:user)

      expect{ patch :update, id: @user.id, user: { "first_name" => "Lori" } }.to
        change{User.first_name}.from("Ellis").to("Lori")
    end
  end

end
