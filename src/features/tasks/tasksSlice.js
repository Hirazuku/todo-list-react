import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({ // createSlice zwróci obiekt w tasksSlice (immutability korzysta z immer, biblioteki zaimportowanej z redux toolkit)
    name: 'tasks', // nazwa
    initialState: { // stan początkowy
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addNewTask: ({ tasks }, { payload }) => { // tak z poprzedniego stanu powstaje nowy
            tasks.push(payload); // payload to nowe zadanie do listy
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
    },
});
// createSlice z

export const { addNewTask, toggleHideDone } = tasksSlice.actions; // addNewTask to jest action creator, stworzony przez createSlice
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;

tasksSlice.reducer({tasks: []}, addNewTask({
    content: "Test",
    done: true,
}))

console.log(tasksSlice.reducer({ tasks: []}, addNewTask({
    content: "Test",
    done: true,
})));

