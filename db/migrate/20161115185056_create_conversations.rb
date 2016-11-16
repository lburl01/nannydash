class CreateConversations < ActiveRecord::Migration[5.0]
  def change
    create_table :conversations do |t|
      t.string :subject, null: false, default: ""
      t.integer :sender_id, :recipient_id

      t.timestamps
    end
  end
end
