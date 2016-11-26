module SpecTestHelper
  def login_user
    login(:user)
  end

  def login(user)
    request.session[:user] = user.id
  end

  def current_user
    User.find(request.session[:user])
  end
end

RSpec.configure do |config|
  config.include SpecTestHelper
end
