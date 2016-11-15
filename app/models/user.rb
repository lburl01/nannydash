class User < ApplicationRecord
  has_many :job_assignments
  has_many :jobs

  enum role: { manager: 0, family: 1, nanny: 2 }
  mount_uploader :picture, PictureUploader
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  before_save :capitalize_county
  before_save :upcase_state

  VALID_STATE_REGEX = /[A-Z]{2}/i
  VALID_ZIP_REGEX = /\d{5}/
  VALID_BIRTHDAY_REGEX = /\d{2}[\/]\d{2}[\/]\d{4}/
  VALID_RATE_REGEX = /\d+[.]\d{2}/
  VALID_PHONE_REGEX = /\(*\+*[1-9]{0,3}\)*-*[1-9]{0,3}[-. \/]*\(*[2-9]\d{2}\)*[-. \/]*\d{3}[-. \/]*\d{4} *e*x*t*\.* *\d{0,4}/

  validates_presence_of :first_name, :last_name, :email, :street, :city, :county
  validates :state, presence: true, length: { maximum: 2},
                    format: { with: VALID_STATE_REGEX }
  validates :zip_code, presence: true, format: { with: VALID_ZIP_REGEX }
  validates :birthday, allow_nil: true, format: { with: VALID_BIRTHDAY_REGEX }
  validates :hourly_rate, allow_nil: true, format: { with: VALID_RATE_REGEX }
  validates :phone_number, presence: true, format: { with: VALID_PHONE_REGEX }
  validate :picture_size

  def self.get_active_sitters
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
    return @sitters
  end

  private

    def picture_size
      if picture.size > 5.megabytes
        errors.add(:picture, "should be less than 5MB")
      end
    end

    def capitalize_county
      self.county = county.capitalize
    end

    def upcase_state
      self.state = state.upcase
    end
end
