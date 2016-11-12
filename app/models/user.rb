class User < ApplicationRecord
  enum role: { manager: 0, family: 1, nanny: 2 }
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  VALID_STATE_REGEX = /[A-Z]{2}/
  VALID_ZIP_REGEX = /\d{5}/
  VALID_BIRTHDAY_REGEX = /\d{2}[\/]\d{2}[\/]\d{4}/
  VALID_RATE_REGEX = /\d+[.]\d{2}/
  VALID_PHONE_REGEX = /\(*\+*[1-9]{0,3}\)*-*[1-9]{0,3}[-. \/]*\(*[2-9]\d{2}\)*[-. \/]*\d{3}[-. \/]*\d{4} *e*x*t*\.* *\d{0,4}/

  validates_presence_of :first_name, :last_name, :email, :street, :city
  validates :state, presence: true, length: { maximum: 2},
                    format: { with: VALID_STATE_REGEX }
  validates :zip_code, presence: true, format: { with: VALID_ZIP_REGEX }
  validates :birthday, allow_nil: true, format: { with: VALID_BIRTHDAY_REGEX }
  validates :hourly_rate, allow_nil: true, format: { with: VALID_RATE_REGEX }
  validates :phone_number, presence: true, format: { with: VALID_PHONE_REGEX }
end
