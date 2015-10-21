class Api::TasksController < ApplicationController
  def create
    @task = Task.new(task_params)
    if @task.save
      render json: @task
    else
      render json: @task.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @users = Task.search(fragment)
    render :index
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render json: @task
  end

  def update
    @task = Task.find(params[:id])
    @task.update(task_params)
    render json: @task
  end

  def show
    @task = Task.find(params[:id])
    render :show
  end

  private
  def task_params
    params.require(:task).permit(:title, :description, :creator_id, :assigned_date, :due_date, :completed, :project_id)
  end
end
