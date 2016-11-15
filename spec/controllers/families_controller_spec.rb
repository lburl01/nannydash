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

end
