require 'rails_helper'

RSpec.describe JobsController, type: :controller do

  before do
    @sitter = create(:user)
    @family = create(:recipient)
    @first_job = create(:job)
    @assigned_job = create(:assigned_job)
  end

  describe 'GET #index' do
    it 'returns array of jobs with sitter assigned' do

      get :index

      json = JSON.parse(response.body)

      expect(json.length).to eq 1
    end
  end

  describe 'GET #get_new_jobs' do
    it 'returns an array of jobs without a sitter' do

      get :get_new_jobs

      json = JSON.parse(response.body)

      expect(json.length).to eq 1
    end
  end

end
