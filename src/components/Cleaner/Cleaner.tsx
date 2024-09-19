import { useEffect } from 'react';
import { CLEAR_TASKS } from '../../actions/tasks';
import { useTasksDispatchContext } from '../../contexts/TasksProvider/TasksProvider';

const Cleaner = () => {
  const dispatch = useTasksDispatchContext();
  
  if (dispatch === undefined) {
    throw new Error('useContext must be used within a TasksProvider');
  }

  useEffect(() => {
    console.log("Render Cleaner");
  });

  return (
    <button 
      onClick={() => {
        dispatch({
          type: CLEAR_TASKS
        });
      }}
      // disabled={tasks.length == 0}
    >
      clear
    </button>
  )
}

export default Cleaner
