import * as React from "react";
import { db } from "./firebase";
import {useEffect} from "react";
import {TasksContext, tasksContextDefaultValue} from "./components/TasksContext";


export interface AppProps {
  userName: string;
  lang: string;
}

export const App = (props: AppProps) => {
    return <TasksContext.Provider value={tasksContextDefaultValue}>
        пук
    </TasksContext.Provider>
};
