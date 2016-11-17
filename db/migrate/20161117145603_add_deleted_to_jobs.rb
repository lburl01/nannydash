class AddDeletedToJobs < ActiveRecord::Migration[5.0]
  def change
    add_column :jobs, :is_deleted, :boolean, null:false, default: false
  end
end
