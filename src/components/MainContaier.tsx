import { TasksListUsingReactServices } from './TasksListUsingReactServices';
import { TasksListUsingReduxToolkit } from './TasksListUsingReduxToolkit';
// import { TasksListUsingRedux } from './TasksListUsingRedux';

export const MainContainer = () => {
    return <div className="pl-6 pt-6 bg-slate-900 h-screen">
        {/* <TasksListUsingRedux /> */}
        <TasksListUsingReduxToolkit />
        <TasksListUsingReactServices />
    </div >;
};