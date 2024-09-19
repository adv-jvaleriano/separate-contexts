import { useEffect } from 'react';
import { CLEAR_TASKS } from '../../actions/tasks';
import { useTasksContext } from '../../contexts/TasksProvider/TasksProvider';
import { CapacityStatus } from '../../types/capacity';

const Cleaner = () => {
  const { tasks, dispatch } = useTasksContext();
  
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
      disabled={tasks.length == CapacityStatus.EMPTY}
    >
      clear
    </button>
  )
}

export default Cleaner
