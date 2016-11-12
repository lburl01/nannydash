require "rails_helper"

RSpec.describe User, :type => :model do
  before do
    @user = build(:user)
  end

  it "should be valid" do
    expect(@user).to be_valid
  end

  it "without password should not be valid" do
    @user.password = ""

    expect(@user).to_not be_valid
  end

  it "without first name should not be valid" do
    @user.first_name = ""

    expect(@user).to_not be_valid
  end

  it "without last name should not be valid" do
    @user.last_name = ""

    expect(@user).to_not be_valid
  end

  it "without email should not be valid" do
    @user.email = ""

    expect(@user).to_not be_valid
  end

  it "without street should not be valid" do
    @user.street = ""

    expect(@user).to_not be_valid
  end

  it "without city should not be valid" do
    @user.city = ""

    expect(@user).to_not be_valid
  end

  it "without state should not be valid" do
    @user.state = ""

    expect(@user).to_not be_valid
  end

  it "without zip code should not be valid" do
    @user.zip_code = ""

    expect(@user).to_not be_valid
  end

end

#
#   test "email should be present" do
#     @user.email = "   "
#     assert_not @user.valid?
#   end
#
#   test "name should not be too long" do
#     @user.name = "a" * 51
#     assert_not @user.valid?
#   end
#
#   test "email should not be too long" do
#     @user.email = "a" * 244 + "@example.com"
#     assert_not @user.valid?
#   end
#
#   test "email validation should accept valid addresses" do
#     valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org first.last@foo.jp alice+bob@baz.cn]
#     valid_addresses.each do |valid_address|
#       @user.email = valid_address
#       assert @user.valid?, "#{valid_address.inspect} should be valid"
#     end
#   end
#
#   test "email validation should reject invalid addresses" do
#     invalid_addresses = %w[user@example,com user_at_foo.org user.name@example. foo@barr_baz.com foo@bar+baz.com]
#     invalid_addresses.each do |invalid_address|
#       @user.email = invalid_address
#       assert_not @user.valid?, "#{invalid_address.inspect} should be invalid"
#     end
#   end
#
#   test "email addresses should be unique" do
#     duplicate_user = @user.dup
#     duplicate_user.email = @user.email.upcase
#     @user.save
#     assert_not duplicate_user.valid?
#   end
#
#   test "password should be present (nonblank)" do
#     @user.password = @user.password_confirmation = " " * 6
#     assert_not @user.valid?
#   end
#
#   test "password should have a minimum length" do
#     @user.password = @user.password_confirmation = "a" * 5
#     assert_not @user.valid?
#   end
#
#   test 'authenticated? should return false for a user with nil digest' do
#     assert_not @user.authenticated?('')
#   end
