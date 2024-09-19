import { FormEvent, useEffect } from 'react'
import { useTasksContext, useTasksDispatchContext } from '../../contexts/TasksProvider/TasksProvider';
import { ADD_TASK } from '../../actions/tasks';
import { TASKS_STACK_LIMIT } from '../../store/tasks';

const TaskForm = () => {

  const { tasks } = useTasksContext();
  const dispatch = useTasksDispatchContext();
  
  if (dispatch === undefined) {
    throw new Error('useContext must be used within a TasksProvider');
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const taskForm: HTMLFormElement = event.target as HTMLFormElement;
    const taskFormData = new FormData(taskForm);
    const newTask: string = taskFormData.get('task') as string;
    if (!newTask) return;

    if (tasks.length == TASKS_STACK_LIMIT) return;
    dispatch({
      type: ADD_TASK,
      payload: newTask
    });

    taskForm.reset();
  }
  
  useEffect(() => {
    console.log("Render TaskForm");
  });

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="task" 
        id="new-task"
      />
      <input type="submit" value="add" />
    </form>
  )
}

export default TaskForm;
