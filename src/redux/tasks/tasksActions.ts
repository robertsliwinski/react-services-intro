import axios from "axios";
import { baseUrl } from '../../constants/config';
import { Task } from '../../models/task.model';
import { COMPLETE_TASK, REMOVE_TASK, SET_TASKS } from "./tasksTypes";

export const getReduxTasksFromServerAsync = () => {
  return async (dispatch: any) => {
    const result = await axios.get(baseUrl);
    const tasks: Task[] = result.data.slice(0, 10);
    dispatch(setTasks(tasks));
  };
};


export function setTasks(payload: any) {
  return {
    type: SET_TASKS,
    payload
  };
}

export const completeTask = (payload: any) => {
  return {
    type: COMPLETE_TASK,
    payload
  };
};

export const removeTask = (payload: any) => {
  return {
    type: REMOVE_TASK,
    payload
  };
};
