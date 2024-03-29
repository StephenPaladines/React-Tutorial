import React from "react"; // Enables JSX to work
import ReactDOM from "react-dom";
import App from "./memeGenerator/App";
// import MyInfo from "./components/MyInfo";
// import Counters from "./components/counter";
import * as serviceWorker from "./serviceWorker";
// import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

// JSX to interpret HTML
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
