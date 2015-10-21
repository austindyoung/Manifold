json.array! @organization_membership_notifications do |notification|
  json.partial! 'api/organization_membership_notifications/organization_membership_notification', notification: notification
end
