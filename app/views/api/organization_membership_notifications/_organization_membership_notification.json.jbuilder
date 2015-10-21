json.extract! notification, :id, :user_id, :adder_id, :organization_id

json.adder (json.extract! notification.adder, :fname, :mname, :lname, :email)

json.organization notification.organization.title
