ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)

abort("The Rails environment is running in production mode!") if Rails.env.production?

require 'spec_helper'
require 'rspec/rails'
require 'capybara/rails'
require 'support/factory_girl'
require 'helpers/spec_test_helper'

ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|
  config.fixture_path = "#{::Rails.root}/spec/fixtures"
  config.include Devise::Test::ControllerHelpers
  config.include SpecTestHelper, :type => :controller

  config.use_transactional_fixtures = true

  config.infer_spec_type_from_file_location!

  # Filter lines from Rails gems in backtraces.
  config.filter_rails_from_backtrace!
end
