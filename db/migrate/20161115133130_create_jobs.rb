class CreateJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.references :user, null: false, foreign_key: true
      t.date :date, null: false, default: Date.today
      t.time :start_time, null: false, default: Time.now
      t.time :end_time, null: false, default: 3.hours.from_now
      t.text :notes
      t.boolean :confirmed, null: false, default: false

      t.timestamps
    end
  end
end
