class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @conversation = Conversation.find(params[:conversation_id])
    @messages = Message.get_messages(@conversation)

    render json: @messages
  end

  def show
    @message = Message.show_message(params[:id])

    render json: @message
  end

  def new
    @message = Message.new
  end

  def create
    recipient = User.find(params[:id])
    sender = current_user
    conversation = sender.send_message(recipient, params[:body],
                                       params[:subject])
  end

  def toggle_deleted_message
    message = Message.find(params[:id])
    message.toggle!(:is_deleted)
  end

  def get_possible_recipients
    @recipients = User.get_recipients

    render json: @recipients
  end

end
