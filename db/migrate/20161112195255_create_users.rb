class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :first_name,                 null: false, default: ""
      t.string :last_name,                  null: false, default: ""
      t.string :email,                      null: false, default: ""
      t.string :encrypted_password,         null: false, default: ""
      t.string :street,                     null: false, default: ""
      t.string :city,                       null: false, default: ""
      t.string :state,                      null: false, default: ""
      t.integer :zip_code,                  null: false, default: ""
      t.integer :role,                      null: false
      t.string :birthday,                   null: false
      t.float :hourly_rate
      t.boolean :cpr_certification,         null: false, default: false
      t.boolean :first_aid_certification,   null: false, default: false
      t.string :recommendation_one_name,    null: false, default: ""
      t.string :recommendation_one_email,   null: false, default: ""
      t.string :recommendation_two_name,    null: false, default: ""
      t.string :recommendation_two_email,   null: false, default: ""
      t.string :recommendation_three_name,  null: false, default: ""
      t.string :recommendation_three_email, null: false, default: ""
      t.boolean :active,                    null: false, default: false
      t.boolean :approved,                  null: false, default: false
      t.text :about

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.inet     :current_sign_in_ip
      t.inet     :last_sign_in_ip

      t.timestamps
    end

    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
  end
end
