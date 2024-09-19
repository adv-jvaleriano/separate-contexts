import { useEffect } from "react";
import { useTasksContext } from "../../contexts/TasksProvider/TasksProvider";

const Capacity = () => {

  const { showTasksStackCapacity } = useTasksContext();

  useEffect(() => {
    console.log("Render Capacity");
  });

  return (
    <button onClick={() => showTasksStackCapacity()}>capacity</button>
  )
}

export default Capacity;
