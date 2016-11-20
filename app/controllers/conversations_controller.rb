class ConversationsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_filter :authenticate_user!

  def index
    @conversations = Conversation.all
  end

  def show
    @conversation = Conversation.find(params[:id])
  end

  def new
  end

  def create
  end

end
