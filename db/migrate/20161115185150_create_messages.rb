class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :body, null: false, default: ""
      t.integer :recipient_id, index: true, null: false
      t.string :subject, default: ""
      t.references :user, index: true, null: false, foreign_key: true
      t.references :conversation, null: false, foreign_key: true, index: true
      t.boolean :is_read, null: false, default: false
      t.boolean :is_deleted, null: false, default: false

      t.timestamps
    end
  end
end
