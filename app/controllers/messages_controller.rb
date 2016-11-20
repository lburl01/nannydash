class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_filter :authenticate_user!

  def index
    @conversation = Conversation.find(params[:conversation_id])
    @messages = @conversation.messages
  end

  def show
  end

  def new
    @message = Message.new
  end

  def create
    recipient = User.find(params[:recipient][:id])
    sender = current_user
    conversation = sender.send_message(recipient, params[:message][:body],
                                              params[:message][:subject])
  end

end
