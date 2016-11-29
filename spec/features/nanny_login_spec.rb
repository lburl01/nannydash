require 'rails_helper'

RSpec.feature "Nanny logs in" do

  describe "GET #index" do
    it "shows the user's name" do
      @nanny = create(:recipient)

      visit '/'
      fill_in('Email', :with => @nanny.email)
      fill_in('Password', :with => @nanny.password)
      click_button('Log in')

      expect(current_path).to eq nanny_root_path

    end
  end

end
