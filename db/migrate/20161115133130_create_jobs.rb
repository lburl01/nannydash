class CreateJobs < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.integer :family_id, index: true, null: false
      t.integer :sitter_id, index: true
      t.date :date, null: false, default: Date.today
      t.time :start_time, null: false, default: Time.now
      t.time :end_time, null: false, default: 3.hours.from_now
      t.text :notes
      t.boolean :confirmed, null: false, default: false
      t.boolean :is_assigned, null:false, default: false
      t.boolean :is_deleted, null:false, default: false

      t.timestamps
    end
  end
end
