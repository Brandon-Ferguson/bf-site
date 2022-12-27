class Contact < ApplicationRecord
  validates :name, :email, :message, presense: true
end
