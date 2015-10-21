json.extract! project, :id, :title, :description, :owner_id, :status, :progress,
:due_date, :created_at, :updated_at, :organization_id

json.tasks project.tasks

json.team_members project.team_members

json.member_ids project.team_members.map {|member| member.id}

json.organization project.organization

# json.array! project.team_members do |member|
#   json.partial! 'api/users/user', user: member
# end
