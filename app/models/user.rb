class User < ApplicationRecord
  include Messageable

  has_many :job_assignments
  has_many :jobs
  has_many :messages, as: :sender

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
      @sitters << {"sitter_id" => sitter.id, "first_name" => sitter.first_name,
                      "last_name" => sitter.last_name, "email" => sitter.email,
                      "phone" => sitter.phone_number, "birthday" => sitter.birthday,
                      "hourly_rate" => sitter.hourly_rate,
                      "cpr_certification" => sitter.cpr_certification,
                      "first_aid_certification" => sitter.first_aid_certification,
                      "street" => sitter.street, "city" => sitter.city,
                      "state" => sitter.state, "zip_code" => sitter.zip_code,
                      "county" => sitter.county,
                      "recommendation_one_name" => sitter.recommendation_one_name,
                      "recommendation_one_email" => sitter.recommendation_one_email,
                      "recommendation_two_name" => sitter.recommendation_two_name,
                      "recommendation_two_email" => sitter.recommendation_two_email,
                      "recommendation_three_name" => sitter.recommendation_three_name,
                      "recommendation_three_email" => sitter.recommendation_three_email,
                      "joined" => sitter.created_at
                    }
    end
    return @sitters
  end

  def self.get_sitter(options)
    sitter = User.find(options)

    @sitter = {"sitter_id" => sitter.id, "first_name" => sitter.first_name,
                    "last_name" => sitter.last_name, "email" => sitter.email,
                    "phone" => sitter.phone_number, "birthday" => sitter.birthday,
                    "hourly_rate" => sitter.hourly_rate,
                    "cpr_certification" => sitter.cpr_certification,
                    "first_aid_certification" => sitter.first_aid_certification,
                    "street" => sitter.street, "city" => sitter.city,
                    "state" => sitter.state, "zip_code" => sitter.zip_code,
                    "county" => sitter.county,
                    "recommendation_one_name" => sitter.recommendation_one_name,
                    "recommendation_one_email" => sitter.recommendation_one_email,
                    "recommendation_two_name" => sitter.recommendation_two_name,
                    "recommendation_two_email" => sitter.recommendation_two_email,
                    "recommendation_three_name" => sitter.recommendation_three_name,
                    "recommendation_three_email" => sitter.recommendation_three_email,
                    "joined" => sitter.created_at
                  }
  end

  def self.get_approved_families
    data = User.family.where(approved: true).all

    @families = []

    data.each do |family|
      @families << {"family_id" => family.id, "first_name" => family.first_name,
                      "last_name" => family.last_name, "email" => family.email,
                      "phone" => family.phone_number, "county" => "Wake",
                      "about" => family.about, "active" => family.active
                    }
    end
    return @families
  end

  def self.get_family(options)
    family = User.find(options)

    @family = {"family_id" => family.id, "first_name" => family.first_name,
                    "last_name" => family.last_name, "email" => family.email,
                    "phone" => family.phone_number, "street" => family.street,
                    "city" => family.city, "state" => family.state,
                    "zip_code" => family.zip_code, "county" => "Wake",
                    "about" => family.about, "active" => family.active
                  }
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
