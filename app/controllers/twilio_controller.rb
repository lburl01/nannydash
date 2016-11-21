class TwilioController < ApplicationController
  skip_before_action :verify_authenticity_token

  def job_alert
    @text_message = "
      It works! From TwilioController
      Go to: https://nannydash.herokuapp.com for more details."

    #  @recipient = User.find(params[:id])
    #  phone_number = sanitize("@recipient.phone_number")
    phone_number = ENV['SAMPLE_NUMBER']
    send_message(phone_number, @text_message)

  end

  private

    def sanitize(number)
      "+1" + number.gsub(/^1|\D/, "")
    end

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
