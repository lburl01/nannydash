class AddAssignedToJobs < ActiveRecord::Migration[5.0]
  def change
    add_column :jobs, :is_assigned, :boolean, null:false, default: false
  end
end
