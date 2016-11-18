class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  before_action do
   @conversation = Conversation.find(params[:conversation_id])
  end

  def index
    @messages = @conversation.messages
  end

  def show
  end

  def new
    @message = Message.new
  end

  def create
    recipient = User.find(params[:recipient][:id])
    sender = User.find(2)
    conversation = sender.send_message(recipient, params[:message][:body],
                                              params[:message][:subject])
  end

end
