class Api::AssignmentsController < ApplicationController
  def create
    @assignment = Assignment.new(assignment_params)
    if @assignment.save
      render json: @assignment
    else
      render json: @assignment.errors.full_messages, status: :unprocessable_entity
    end
  end



  private
  def assignment_params
    params.require(:assignment).permit(:task_id, :asignee_id)
  end
end
