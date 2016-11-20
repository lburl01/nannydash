class ConversationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @conversations = Conversation.get_user_conversations(current_user)
  end

  def show
    @conversation = Conversation.find(params[:id])
  end

  def new
  end

  def create
  end

end
