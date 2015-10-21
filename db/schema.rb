# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150824072911) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assignments", force: :cascade do |t|
    t.integer  "task_id",    null: false
    t.integer  "asignee_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "assignments", ["asignee_id"], name: "index_assignments_on_asignee_id", using: :btree
  add_index "assignments", ["task_id"], name: "index_assignments_on_task_id", using: :btree

  create_table "comments", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "membership_requests", force: :cascade do |t|
    t.integer  "requester_id",    null: false
    t.integer  "requestee_id",    null: false
    t.integer  "organization_id", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "organization_membership_notifications", force: :cascade do |t|
    t.integer  "user_id",         null: false
    t.integer  "adder_id",        null: false
    t.integer  "organization_id", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "organization_memberships", force: :cascade do |t|
    t.integer  "member_id",       null: false
    t.integer  "organization_id", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "organizations", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "project_membership_notifications", force: :cascade do |t|
    t.integer  "project_id", null: false
    t.integer  "adder_id"
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title",           null: false
    t.text     "description",     null: false
    t.text     "status"
    t.text     "progress"
    t.date     "due_date"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "organization_id"
    t.integer  "owner_id"
  end

  add_index "projects", ["organization_id"], name: "index_projects_on_organization_id", using: :btree
  add_index "projects", ["owner_id"], name: "index_projects_on_owner_id", using: :btree

  create_table "tasks", force: :cascade do |t|
    t.text     "title",          null: false
    t.integer  "parent_task_id"
    t.text     "description"
    t.integer  "creator_id",     null: false
    t.date     "due_date"
    t.boolean  "completed"
    t.date     "date_completed"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "project_id"
  end

  add_index "tasks", ["creator_id"], name: "index_tasks_on_creator_id", using: :btree
  add_index "tasks", ["parent_task_id"], name: "index_tasks_on_parent_task_id", unique: true, using: :btree

  create_table "team_memberships", force: :cascade do |t|
    t.integer  "project_id", null: false
    t.integer  "member_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "team_memberships", ["member_id"], name: "index_team_memberships_on_member_id", using: :btree
  add_index "team_memberships", ["project_id"], name: "index_team_memberships_on_project_id", using: :btree

  create_table "teams", force: :cascade do |t|
    t.integer  "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "fname",           null: false
    t.string   "mname"
    t.string   "lname",           null: false
    t.string   "email",           null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.string   "img_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

  create_table "workspace_project_memberships", force: :cascade do |t|
    t.integer  "project_id",   null: false
    t.integer  "workspace_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "workspace_project_memberships", ["workspace_id"], name: "index_workspace_project_memberships_on_workspace_id", using: :btree

  create_table "workspace_task_memberships", force: :cascade do |t|
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "task_id"
    t.integer  "workspace_id"
  end

  add_index "workspace_task_memberships", ["workspace_id"], name: "index_workspace_task_memberships_on_workspace_id", using: :btree

  create_table "workspaces", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
  end

end
