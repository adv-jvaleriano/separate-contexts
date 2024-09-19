import { useEffect } from 'react';
import MainComponent from './components/MainComponent/MainComponent';
import SecondaryComponent from './components/SecondaryComponent/SecondaryComponent';
import TaskForm from './components/TaskForm/TaskForm';
import Cleaner from './components/Cleaner/Cleaner';

function App() {

  useEffect(() => {
    console.log("Render App");
  });

  return (
    <>
      <TaskForm />
      <MainComponent />
      <SecondaryComponent />
      <Cleaner />
    </>
  )
}

export default App
