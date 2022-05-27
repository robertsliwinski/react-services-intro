import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../constants/config';
import { Task } from '../../models/task.model';

export interface TasksStoreState {
  tasks: Task[];
}

const initialState = {
  tasks: []
} as TasksStoreState;


///
/// ASYNC
///
const getTasksAsync = createAsyncThunk(
  'tasks/getAll',
  async (empty: void, { getState, dispatch }) => {
    const result = await axios.get(baseUrl);
    const tasks: Task[] = result.data.slice(0, 10);
    dispatch(tasksActions.setTasks(tasks));
  }
);


///
/// SLICE
///
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
    },
    completeTask(state, action: PayloadAction<number>) {
      const task = state.tasks.find(item => item.id === action.payload);
      if (task) {
        task.completed = true;
      }
    },
    removeTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter(item => item.id !== action.payload);
    }
  },
  extraReducers: {

  }
});


export const tasksActions = tasksSlice.actions;
export const tasksActionsThunk = {
  getTasksAsync,
};
export default tasksSlice.reducer;
