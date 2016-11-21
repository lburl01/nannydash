require 'rails_helper'

RSpec.describe JobsController, type: :controller do

  describe 'GET #index' do
    it 'returns array of jobs with sitter assigned' do
      @sitter = create(:user)
      @family = create(:recipient)
      @first_job = create(:job)
      @assigned_job = create(:assigned_job)

      get :index

      json = JSON.parse(response.body)

      expect(json.length).to eq 1
    end
  end

end
