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

ActiveRecord::Schema.define(version: 20161115185150) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "conversations", force: :cascade do |t|
    t.string   "subject",      default: "",    null: false
    t.integer  "sender_id"
    t.integer  "recipient_id"
    t.boolean  "is_deleted",   default: false, null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.integer  "family_id",                                   null: false
    t.integer  "sitter_id"
    t.date     "date",        default: '2016-11-20',          null: false
    t.time     "start_time",  default: '2000-01-01 23:19:30', null: false
    t.time     "end_time",    default: '2000-01-01 02:19:30', null: false
    t.text     "notes"
    t.boolean  "confirmed",   default: false,                 null: false
    t.boolean  "is_assigned", default: false,                 null: false
    t.boolean  "is_deleted",  default: false,                 null: false
    t.datetime "created_at",                                  null: false
    t.datetime "updated_at",                                  null: false
    t.index ["family_id"], name: "index_jobs_on_family_id", using: :btree
    t.index ["sitter_id"], name: "index_jobs_on_sitter_id", using: :btree
  end

  create_table "messages", force: :cascade do |t|
    t.text     "body",            default: "",    null: false
    t.integer  "recipient_id",                    null: false
    t.string   "subject",         default: ""
    t.integer  "user_id",                         null: false
    t.integer  "conversation_id",                 null: false
    t.boolean  "is_read",         default: false, null: false
    t.boolean  "is_deleted",      default: false, null: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.index ["conversation_id"], name: "index_messages_on_conversation_id", using: :btree
    t.index ["recipient_id"], name: "index_messages_on_recipient_id", using: :btree
    t.index ["user_id"], name: "index_messages_on_user_id", using: :btree
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

  add_foreign_key "messages", "conversations"
  add_foreign_key "messages", "users"
end
