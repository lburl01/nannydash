require 'rails_helper'

RSpec.describe AgencyController, type: :controller do
  include Devise::Test::ControllerHelpers

  describe '#new' do
    it 'assigns @agency' do
      get :new

      expect(assigns(:agency)).to be_a_new(User)
    end
  end

  describe '#create' do
    it 'creates new @agency' do
      
    end
  end
end
