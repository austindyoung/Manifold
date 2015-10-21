# Schema Information

## tasks
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    | not null
parent_task_id | integer   | foreign key (references self)
description    | text      |
creator_id     | integer   | not null, foreign key (references users)
project_id     | integer   |
assigned_date  | date      | not null
due_date       | date      |
completed      | boolean   |
date_completed | boolean   |

## workspaces
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | integer   | not null
user_id        | integer   | not null

## comments
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
parent_id      | integer   | foreign key (references self)
author_id      | integer   | foreign key (references users)
subject        | string    | not null
body           | text      | not null
task_id        | integer   | not null, foreign key (references tasks)

## assignments
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
task_id       | integer   | not null, unique
assignee_id   | string    | not null, unique

## followings
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
task_id       | integer   | not null
follower_id   | integer   | not null

## organizations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, unique

## organziation_memberships
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
member_id       | integer   | not null, foreign key (references users)
organization_id | integer   | not null, foreign key (references organizations)


## projects
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
description     | text      | not null
owner_id        | text      | not null, foreign key (references users)
organization_id | text      | not null, foreign key (references organizations)
status          | text      |
progress        | text      |
due_date        | date      | not null

## team_memberships
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
project_id   | integer   | not null, foreign key (references projects)
member_id    | integer   | not null, foreign key (references users)

## project_overseeings
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
project_id   | integer   | not null, foreign key (references projects)
overseer_id  | integer   | not null, foreign key (references users)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
fname           | string    | not null
lname           | string    | not null
img_file        | string    | not null
password_digest | string    | not null
session_token   | string    | not null, unique
