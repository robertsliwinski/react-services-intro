import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import { default as tasksSlice } from './slices/tasksSlice';

const pReducer = combineReducers({
    tasks: tasksSlice
});

export const storeReduxToolkit = configureStore({
    reducer: pReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ReduxThunk)
});

export type RootState = ReturnType<typeof storeReduxToolkit.getState>;
export type AppDispatch = typeof storeReduxToolkit.dispatch;
