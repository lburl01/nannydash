class SittersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    data = User.nanny.all

    @sitters = []

    data.each do |sitter|
      address = "#{sitter.street}, #{sitter.city}, #{sitter.state}, #{sitter.zip_code}"
      recommendation_one = "#{sitter.recommendation_one_name}, #{sitter.recommendation_one_email}"
      recommendation_two = "#{sitter.recommendation_two_name}, #{sitter.recommendation_two_email}"
      recommendation_three = "#{sitter.recommendation_three_name}, #{sitter.recommendation_three_email}"
      @sitters << {"sitter_id" => sitter.id, "first_name" => sitter.first_name,
                      "last_name" => sitter.last_name, "email" => sitter.email,
                      "phone" => sitter.phone_number, "county" => sitter.county,
                      "birthday" => sitter.birthday, "address" => address,
                      "hourly_rate" => sitter.hourly_rate,
                      "cpr_cert" => sitter.cpr_certification,
                      "first_aid_cert" => sitter.first_aid_certification,
                      "recomendation_one" => recommendation_one,
                      "recomendation_two" => recommendation_two,
                      "recomendation_three" => recommendation_three,
                      "joined" => sitter.created_at
                    }
    end

    render json: @sitters
  end

end
