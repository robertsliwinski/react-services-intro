import { useEffect } from 'react';
import { Task } from '../models/task.model';
import { useAppDispatch, useAppSelector } from '../redux-toolkit/redux';
import { tasksActions, tasksActionsThunk } from '../redux-toolkit/slices/tasksSlice';

export const TasksListUsingReduxToolkit = () => {
    const dispatch = useAppDispatch();
    const tasks: Task[] = useAppSelector(state => state.tasks).tasks;

    useEffect(() => {
        dispatch(tasksActionsThunk.getTasksAsync());
    }, []);

    const complete = (id: number) => {
        dispatch(tasksActions.completeTask(id));
    };

    return (
        <div className="my-6">
            <h1 className="text-2xl font-bold underline">
                TODO LIST (using Redux Toolkit):
            </h1>

            <div className="flex flex-col w-3/5">
                {tasks.map((item: Task, index: number) =>
                    <div key={item.id} className="flex flex-row justify-between w-full mt-1">
                        <span>
                            {index + 1} - {item.title}
                            {item.completed && <span className="font-bold text-sm pl-1">(completed)</span>}
                        </span>

                        {!item.completed && <button className="px-2 py-0 border border-sky-500 text-xs" onClick={() => complete(item.id)}>Complete Task</button>}
                    </div>
                )}
            </div>
        </div >
    );
};