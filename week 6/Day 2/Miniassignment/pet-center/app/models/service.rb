class Service < ApplicationRecord
  validates :description, :price, presence: true
  validates :price, numericality: {greater_than: 0}
end
