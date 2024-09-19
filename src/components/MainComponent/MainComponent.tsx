import { useEffect } from 'react';
import DisplayTasks from '../DisplayTasks/DisplayTasks';

const MainComponent = () => {

  useEffect(() => {
    console.log("Render MainComponent");
  });

  return (
    <>
      <DisplayTasks />
    </>
  )
}

export default MainComponent
