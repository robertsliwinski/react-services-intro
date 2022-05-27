import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../models/task.model';
import { completeTask, getReduxTasksFromServerAsync } from '../redux/tasks/tasksActions';


export const TasksListUsingRedux = () => {
    const dispatch = useDispatch();
    const tasks: Task[] = useSelector((state: any) => state.tasks).tasks;

    useEffect(() => {
        dispatch(getReduxTasksFromServerAsync());
    }, []);

    const complete = (id: number) => {
        dispatch(completeTask(id));
    };

    return (
        <div className="my-6">
            <h1 className="text-2xl font-bold underline">
                TODO LIST (using Redux Thunk):
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
        </div>
    );
};