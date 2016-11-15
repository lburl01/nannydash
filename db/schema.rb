# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161115133130) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "jobs", force: :cascade do |t|
    t.integer  "user_id",                                    null: false
    t.date     "date",       default: '2016-11-15',          null: false
    t.time     "start_time", default: '2000-01-01 13:43:01', null: false
    t.time     "end_time",   default: '2000-01-01 16:43:01', null: false
    t.text     "notes"
    t.boolean  "confirmed",  default: false,                 null: false
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
    t.index ["user_id"], name: "index_jobs_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name",                 default: "",    null: false
    t.string   "last_name",                  default: "",    null: false
    t.string   "email",                      default: "",    null: false
    t.string   "encrypted_password",         default: "",    null: false
    t.string   "street",                     default: "",    null: false
    t.string   "city",                       default: "",    null: false
    t.string   "state",                      default: "",    null: false
    t.integer  "zip_code",                                   null: false
    t.integer  "role"
    t.string   "birthday"
    t.float    "hourly_rate"
    t.boolean  "cpr_certification",          default: false, null: false
    t.boolean  "first_aid_certification",    default: false, null: false
    t.string   "recommendation_one_name",    default: ""
    t.string   "recommendation_one_email",   default: ""
    t.string   "recommendation_two_name",    default: ""
    t.string   "recommendation_two_email",   default: ""
    t.string   "recommendation_three_name",  default: ""
    t.string   "recommendation_three_email", default: ""
    t.boolean  "active",                     default: false, null: false
    t.boolean  "approved",                   default: false, null: false
    t.text     "about"
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",              default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
    t.string   "phone_number",               default: "",    null: false
    t.string   "county",                     default: "",    null: false
    t.boolean  "is_deleted",                 default: false, null: false
    t.string   "picture"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "jobs", "users"
end
