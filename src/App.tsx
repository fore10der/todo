import * as React from "react";

export interface AppProps {
  userName: string;
  lang: string;
}

export const App = (props: AppProps) => {


    return (<h1>
        Hi {props.userName} from React! Welcome to {props.lang}!
    </h1>)
};
