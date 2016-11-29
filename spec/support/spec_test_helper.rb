require 'rails_helper'
require 'capybara/dsl'

module SpecTestHelper
  include Capybara::DSL
  include Warden::Test::Helpers

  def login_user
    login(:user)
  end

  def login(user)
    visit '/home'
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_on 'Log in'
  end

  def sign_in(resource_or_scope, resource = nil)
    resource ||= resource_or_scope
    scope = Devise::Mapping.find_scope!(resource_or_scope)
    login_as(resource, scope: scope)
  end

  def sign_out(resource_or_scope)
    scope = Devise::Mapping.find_scope!(resource_or_scope)
    logout(scope)
  end

  def current_user
    User.find(request.session[:user])
  end
end

RSpec.configure do |config|
  config.include SpecTestHelper
end
