json.extract! notification, :id, :user_id, :adder_id, :project_id

json.adder (json.extract! notification.adder, :fname, :mname, :lname, :email)

json.project notification.project.title
