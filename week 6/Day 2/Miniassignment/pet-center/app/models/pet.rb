class Pet < ApplicationRecord
  belongs_to :owner
  validates :name, :description, :age, presence: true
  validates :age, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
