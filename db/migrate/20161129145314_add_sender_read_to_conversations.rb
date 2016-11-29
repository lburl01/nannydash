class AddSenderReadToConversations < ActiveRecord::Migration[5.0]
  def change
    add_column :conversations, :sender_read, :boolean, null: false, default: false
  end
end
