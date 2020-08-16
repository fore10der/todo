import * as React from 'react';
import Task from "../interfaces/Task";


interface TaskContextValue {
    tasks: Task[]
}

export const tasksContextDefaultValue: TaskContextValue = {
    tasks: []
}

export const TasksContext = React.createContext<TaskContextValue | null>(null);