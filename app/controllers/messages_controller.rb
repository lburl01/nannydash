class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @conversation = Conversation.find(params[:conversation_id])
    @messages = Message.get_messages(@conversation)

    render json: @messages
  end

  def show
    @message = Message.find(params[:id])

    if @message.user_id != current_user.id
      @message.update_attribute(:is_read, true)
    end

    render json: @message
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
