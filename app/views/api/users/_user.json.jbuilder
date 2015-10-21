json.extract! user, :id, :fname, :mname, :lname, :email, :img_url

json.requests user.requests do |request|
  json.partial! 'api/membership_requests/membership_request', request: request
end
