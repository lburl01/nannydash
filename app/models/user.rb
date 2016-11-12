class User < ApplicationRecord
  enum role: { manager: 0, family: 1, nanny: 2 }
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
