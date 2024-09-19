import { ADD_TASK, CLEAR_TASKS, REMOVE_TASK } from "../actions/tasks";
import { Action } from "../types/capacity";

export const tasksReducer = (prevState: string[], action: Action): string[] => {
  switch (action.type) {
    case ADD_TASK: {
      return [...prevState, action.payload];
    }
    case REMOVE_TASK: {
      return prevState.filter((task) => task != action.payload);
    }
    case CLEAR_TASKS: {
      return [];
    }
    default:
      throw new Error("Unknown action: " + action.type);
  }
};
