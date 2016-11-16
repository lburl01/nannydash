class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :body, null: false, default: ""
      t.string :subject, default: ""
      t.references :user, index: true, null: false, foreign_key: true
      t.references :conversation, null: false, foreign_key: true, index: true
      t.boolean :read, null: false, default: false

      t.timestamps
    end
  end
end
