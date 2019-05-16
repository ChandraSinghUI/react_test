import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import App from "./Container/app";
import rootReducers from "../src/store/Reducers/index";



const store = createStore(rootReducers,composeWithDevTools());

console.log(" connect Store", store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
