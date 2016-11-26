require 'rails_helper'

RSpec.feature "Nanny logs in" do

  describe "GET #index" do
    it "shows the user's name" do
      @nanny = create(:recipient)

      get '/users/sign_in'
      fill_in('Email', :with => @nanny.email)
      fill_in('Password', :with => @nanny.password)
      click_button('Log In')

      get '/'

      expect(page).to have_text(@user.first_name)

    end
  end

end
