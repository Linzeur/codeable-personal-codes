class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.references :pet, foreign_key: true

      t.timestamps
    end
  end
end
