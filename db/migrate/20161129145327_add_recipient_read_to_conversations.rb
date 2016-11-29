class AddRecipientReadToConversations < ActiveRecord::Migration[5.0]
  def change
    add_column :conversations, :recipient_read, :boolean, null: false, default: false
  end
end
