class WorkspaceTaskMembership < ActiveRecord::Base
  belongs_to :task
  belongs_to :workspace
end
