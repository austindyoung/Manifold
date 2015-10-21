json.array! @project_membership_notifications do |notification|
  json.partial! 'api/project_membership_notifications/project_membership_notification', notification: notification
end
