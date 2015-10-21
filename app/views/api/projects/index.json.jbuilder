json.array! @projects do |project|
  json.partial! 'api/projects/project', project: project
  # json.extract! project, :title, :description, :owner_id, :status, :progress,
  # :due_date, :created_at, :updated_at, :organization_id
  #
  # json.tasks project.tasks
  #
  # json.team_members project.team_members

end
