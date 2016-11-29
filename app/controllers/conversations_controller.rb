class ConversationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @conversations = Conversation.get_user_conversations(current_user)

    render json: @conversations
  end

  def show
    @conversation = Conversation.get_conversation(params[:id], current_user)

    render json: @conversation
  end

  def new
  end

  def create
  end

end
