class CreateJobAssignments < ActiveRecord::Migration[5.0]
  def change
    create_table :job_assignments do |t|
      t.references :job, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
