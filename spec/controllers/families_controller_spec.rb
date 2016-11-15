require 'rails_helper'

RSpec.describe FamiliesController, type: :controller do

  describe "PATCH #toggle_active_family" do
    it "toggles a family active boolean" do
      @user = create(:user)

      toggle_active_family

      expect(@user.active).to eq true
    end
  end

end
