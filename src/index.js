import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import {theme} from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const tasksReducer = (state = initialState, action) => {
    if (action.type === "addTask") {
        return {
            ...state,
            tasks: [...state.tasks,
            {
                content: action.payload,
            },
            ],
        };
    }
    return state;
};

const selectTasks = (({tasks}) => tasks);

const store = configureStore({reducer: tasksReducer});
const addTask = content => ({
    type: "addTask",
    payload: content,
})

console.log(store.getState());

store.dispatch(addTask("Zadanie1"));

console.log(store.getState());

store.dispatch(addTask("Zadanie2"));

console.log(store.getState());
console.log(selectTasks(store.getState()));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
