class TwilioController < ApplicationController
  skip_before_action :verify_authenticity_token

  def job_alert
    @text_message = "
     This comes from TwilioController
     Go to: https://nannydash.herokuapp.com for more details."

     begin
      #  @recipient = User.find(params[:id])
      #  phone_number = @recipient.phone_number
      phone_number = '+17049950579'
       send_message(phone_number, @text_message)
       flash[:success] = "Babysitters will be notified."
     rescue
       flash[:alert] = "Something when wrong."
     end

  end

  private

    def send_message(phone_number, text_message)

      @twilio_number = ENV['TWILIO_NUMBER']
      @client = Twilio::REST::Client.new ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN']

      message = @client.account.messages.create(
        :from => @twilio_number,
        :to => phone_number,
        :body => text_message
      )
      puts message.to
    end
end
