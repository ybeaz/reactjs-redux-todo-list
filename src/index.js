import React from "react";
import ReactDOM from "react-dom";
import { ToDo } from "./ToDo";
import { Provider } from "react-redux";
import { store } from "./store";
import { Container } from "./Container";

import "./styles.css";

function _App(props) {
  return (
    <div className="App">
      <h1>A prototype of a TODO list</h1>
      <ToDo />
    </div>
  );
}

const App = Container(_App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// Button New => ToDo list
// Create
