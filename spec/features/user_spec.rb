require 'rails_helper'

RSpec.feature 'User Management' do

  context 'manager signs in' do
    it 'they see their name on the page' do
      @manager = create(:user)

      visit new_user_session_path
      fill_in "Email", with: @manager.email
      fill_in "Password", with: @manager.password
      click_on "Log in"

      expect(page).to have_text("Hey, #{@manager.first_name}")
    end
  end

end
