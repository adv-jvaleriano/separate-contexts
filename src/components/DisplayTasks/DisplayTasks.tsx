import { useEffect } from 'react';
import TasksList from '../TasksList/TasksList';

const DisplayTasks = () => {

  useEffect(() => {
    console.log("Render DisplayTasks");
  });

  return (
    <>
      <TasksList />
    </>
  )
}

export default DisplayTasks
