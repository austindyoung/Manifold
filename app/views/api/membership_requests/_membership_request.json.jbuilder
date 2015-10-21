json.extract! request, :id, :requester_id, :requestee_id, :organization_id

json.requester (json.extract! request.requester, :fname, :mname, :lname, :email)

json.organization request.organization.title
