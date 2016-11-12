class User < ApplicationRecord
  enum role: { manager: 0, family: 1, nanny: 2 }
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  VALID_STATE_REGEX = /[A-Z]{2}/
  VALID_ZIP_REGEX = /\d{5}/
  validates_presence_of :first_name, :last_name, :email, :street, :city
  validates :state, presence: true, length: { maximum: 2},
                    format: { with: VALID_STATE_REGEX }
  validates :zip_code, presence: true, format: { with: VALID_ZIP_REGEX }
end

# t.string :last_name,                  null: false, default: ""
# t.string :email,                      null: false, default: ""
# t.string :encrypted_password,         null: false, default: ""
# t.string :street,                     null: false, default: ""
# t.string :city,                       null: false, default: ""
# t.string :state,                      null: false, default: ""
# t.integer :zip_code,                  null: false, default: ""
# t.integer :role
# t.string :birthday
# t.float :hourly_rate
# t.boolean :cpr_certification,         null: false, default: false
# t.boolean :first_aid_certification,   null: false, default: false
# t.string :recommendation_one_name,    default: ""
# t.string :recommendation_one_email,   default: ""
# t.string :recommendation_two_name,    default: ""
# t.string :recommendation_two_email,   default: ""
# t.string :recommendation_three_name,  default: ""
# t.string :recommendation_three_email, default: ""
# t.boolean :active,                    null: false, default: false
# t.boolean :approved,                  null: false, default: false
# t.text :about
