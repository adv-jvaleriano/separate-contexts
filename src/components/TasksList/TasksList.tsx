import { useEffect } from "react";
import { useTasksContext, useTasksDispatchContext } from "../../contexts/TasksProvider/TasksProvider";
import { REMOVE_TASK } from "../../actions/tasks";

const TasksList = () => {

  const { tasks } = useTasksContext();
  const dispatch = useTasksDispatchContext();

  if (dispatch === undefined) {
    throw new Error('useContext must be used within a TasksProvider');
  }

  useEffect(() => {
    console.log("Render TasksList");
  });

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span>{task}</span>
          <button onClick={() => {
                if (tasks.length == 0) return;
                dispatch({
                  type: REMOVE_TASK,
                  payload: task
                });

          }}>🗑️</button>
        </li>
      ))}
    </ul>
  )
}

export default TasksList;
