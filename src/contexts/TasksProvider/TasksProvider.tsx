import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { CapacityMessage } from "../../components/Capacity/messages";
import { INITIAL_TASKS, TASKS_STACK_LIMIT } from "../../store/tasks";
import { tasksReducer } from "../../reducers/tasks";
import { TasksContextProps } from "../../types/context";
import { INITIAL_TASKS_CONTEXT } from "./constants";
import { CapacityStatus } from "../../types/capacity";

const TasksContext = createContext<TasksContextProps>(INITIAL_TASKS_CONTEXT);

export const useTasksContext = () => useContext(TasksContext);

const TasksProvider = ({ children }: {children: ReactNode}) => {

  const [ tasks, dispatch ] = useReducer(tasksReducer, INITIAL_TASKS);

  const showTasksStackCapacity = (): void => {
    const tasksCount: number = tasks.length;
    let currentCapacity: string = '';
    currentCapacity = tasksCount === CapacityStatus.EMPTY ? CapacityMessage[CapacityStatus.EMPTY] : tasksCount < TASKS_STACK_LIMIT ? CapacityMessage[CapacityStatus.AVAILABLE] : CapacityMessage[CapacityStatus.FULL];
    alert(currentCapacity);
  };

  useEffect(() => {
    console.log("Render TasksProvider");
  });

  return (
    <TasksContext.Provider value={{
        tasks, 
        showTasksStackCapacity,
        dispatch,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider;
