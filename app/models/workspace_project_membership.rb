class WorkspaceProjectMembership < ActiveRecord::Base
  belongs_to :project
  belongs_to :workspace
end
