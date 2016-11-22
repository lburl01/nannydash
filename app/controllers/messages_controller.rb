class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @conversation = Conversation.find(params[:conversation_id])
    @messages = Message.get_messages(@conversation)

    render json: @messages
  end

  def show
    @message = Message.show_message(params[:id])

    if @message['sender_id'] != current_user.id
      @message['is_read'] = true
    end

    render json: @message
  end

  def new
    @message = Message.new
  end

  def create
    recipient = User.find(params[:id])
    sender = current_user
    conversation = sender.send_message(recipient, params[:body],
                                       params[:subject], params[:conversation_id])
  end

end
