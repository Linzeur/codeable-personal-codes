class AgeValidator < ActiveModel::Validator
  def validate(record)
    if record[:birthdate] > 18.years.ago
      puts "This person is younger than 18 years"
      #record.errors[:base] << "This person is younger than 18 years"
    end
  end 
end

class Owner < ApplicationRecord
  validates :name, :birthdate, presence: true
  validates_with AgeValidator
end