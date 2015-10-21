json.extract! task, :id, :title, :parent_task_id, :description, :creator_id,
:due_date, :completed, :created_at, :updated_at, :project_id

json.assignees task.assignees

# extract
