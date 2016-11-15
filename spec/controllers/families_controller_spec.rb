require 'rails_helper'

RSpec.describe FamiliesController, type: :controller do

  describe "PATCH #toggle_active_family" do
    it('works!') do
      @user = create(:user)

      expect(@user.active).to eq false

      patch :toggle_active_family, id: @user.id 
      @user.reload

      expect(@user.active).to eq true

    end
  end

  describe "GET #index" do
    it 'assigns @families' do
      @user = create(:user, role: 1, approved: true)

      get :index

      json = JSON.parse response.body

      expect(json.length).to eq 1
    end
  end

end
