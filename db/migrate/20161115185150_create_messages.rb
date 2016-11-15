class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :body, null: false, default: ""
      t.string :subject, default: ""
      t.references :sender, polymorphic: true
      t.references :conversation, null: false, foreign_key: true, index: true

      t.timestamps
    end
  end
end
