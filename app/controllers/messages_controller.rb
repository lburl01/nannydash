class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new

  end

  def create
    recipient = User.find(params[:recipient][:id])
    sender = User.find(2)
    conversation = sender.send_message(recipient, params[:message][:body],
                                              params[:message][:subject])
  end

end
