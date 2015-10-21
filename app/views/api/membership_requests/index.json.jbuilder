json.array! @membership_requests do |request|
  json.partial! 'api/membership_requests/membership_request', request: request
end
