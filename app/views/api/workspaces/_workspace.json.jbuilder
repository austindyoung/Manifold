json.extract! workspace, :id, :title, :created_at, :updated_at

json.members workspace.members do |member|
  json.partial! 'api/users/user', user: member
end

json.projects workspace.projects do |project|
  json.partial! 'api/projects/project', project: project

  json.tasks project.tasks do |task|
    json.partial! 'api/tasks/task', task: task
  end
end

# json.bare_tasks @workspace.bare_tasks do |task|
#   json.partial! 'tasks/task', task: task
