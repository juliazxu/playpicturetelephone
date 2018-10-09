import * as React from "react";
import "./assets/scss/App.scss";
import Home from "./pages/home";

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <Home />
            </div>
        );
    }
}
