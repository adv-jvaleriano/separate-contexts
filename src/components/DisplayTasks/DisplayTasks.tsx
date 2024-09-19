import { useEffect } from 'react';
import TasksList from '../TasksList/TasksList';

const DisplayTasks = () => {

  useEffect(() => {
    console.log("Render DisplayTasks");
  });

  return (
    <div>
      <TasksList />
    </div>
  )
}

export default DisplayTasks
