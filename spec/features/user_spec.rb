require 'rails_helper'

RSpec.feature 'User Management' do

  context 'manager sign in' do
    it 'redirects to authenticated root' do
      @manager = create(:user)

      visit new_user_session_path
      fill_in "Email", with: @manager.email
      fill_in "Password", with: @manager.password
      click_on "Log in"

      expect(page).to have_content("View and manage Babysitter applications and jobs completed")
    end
  end

end
