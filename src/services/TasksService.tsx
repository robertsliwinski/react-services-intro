import axios from 'axios';
import produce from 'immer';
import { atom, useRecoilState } from 'recoil';
import { baseUrl } from '../constants/config';
import { Task } from '../models/task.model';

export const defaultTasksState = atom({
    key: 'tasks',
    default: [] as Task[]
});

export const TasksService = () => {
    const [tasks, setTasks] = useRecoilState<Task[]>(defaultTasksState);

    const getTasksFromServer = async () => {
        const result: any = await axios.get(baseUrl);

        setTasks(tasks =>
            produce(tasks, draft => {
                return (result.data.slice(0, 10) as Task[]);
            })
        );
    };

    const completeTask = (id: number) => {
        setTasks(tasks => produce(tasks, draft => {
            const task = draft.find(item => item.id === id);
            if (task) {
                task.completed = true;
            }
        }));
    };

    const removeTask = (id: number) => {
        setTasks(tasks => produce(tasks, draft => {
            return draft.filter(item => item.id !== id);
        }));
    };

    return {
        tasks,
        getTasksFromServer,
        completeTask,
        removeTask,
    };
};
