json.partial! 'organization', organization: @organization

# json.extract! @organization, :id, :title, :created_at, :updated_at
#
# json.members @organization.members do |member|
#   json.partial! 'api/users/user', user: member
# end
#
# json.projects @organization.projects do |project|
#   json.partial! 'api/projects/project', project: project
#
#   json.tasks project.tasks do |task|
#     json.partial! 'api/tasks/task', task: task
#   end
# end
