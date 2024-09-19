import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { CapacityMessage } from "../../components/Capacity/messages";
import { INITIAL_TASKS, TASKS_STACK_LIMIT } from "../../store/tasks";
import { tasksReducer } from "../../reducers/tasks";
import { TasksContextProps, TasksDispatchContextProps } from "../../types/context";
import { INITIAL_TASKS_CONTEXT } from "./constants";

const TasksContext = createContext<TasksContextProps>(INITIAL_TASKS_CONTEXT);
const TasksDispatchContext = createContext<TasksDispatchContextProps>(undefined);

export const useTasksContext = () => useContext(TasksContext);
export const useTasksDispatchContext = () => useContext(TasksDispatchContext);

const TasksProvider = ({ children }: {children: ReactNode}) => {

  const [ tasks, dispatch ] = useReducer(tasksReducer, INITIAL_TASKS);

  const showTasksStackCapacity = (): void => {
    const tasksCount: number = tasks.length;
    debugger
    let currentCapacity: string = '';
    currentCapacity = tasksCount === 0 ? CapacityMessage[0] : tasksCount < TASKS_STACK_LIMIT ? CapacityMessage[1] : CapacityMessage[2];
    alert(currentCapacity);
  };

  useEffect(() => {
    console.log("Render TasksProvider");
  });

  return (
    <TasksContext.Provider value={{
        tasks, 
        showTasksStackCapacity
      }}
    >
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export default TasksProvider;
