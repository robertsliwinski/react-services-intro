import { Task } from '../../models/task.model';
import { COMPLETE_TASK, REMOVE_TASK, SET_TASKS } from "./tasksTypes";

const initialState = {
  tasks: []
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TASKS:
      return Object.assign({}, state, {
        tasks: action.payload
      });
    case COMPLETE_TASK:
      return {
        ...state, tasks: state.tasks.map((element: Task, i: number) => element.id === action.payload ? { ...element, completed: true } : element)
      };
    case REMOVE_TASK:
      return { ...state, tasks: state.tasks.slice(0, state.tasks.length - 1) };
    default: return state;
  };
};


export default reducer;
