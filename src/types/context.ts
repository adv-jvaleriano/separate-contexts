import { Dispatch } from "react";
import { Action } from "./capacity";

export type TasksContextProps = {
  tasks: string[];
  showTasksStackCapacity: Function;
};

export type TasksDispatchContextProps = Dispatch<Action> | undefined;
