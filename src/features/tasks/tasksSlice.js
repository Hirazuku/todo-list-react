import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({ // createSlice zwróci obiekt w tasksSlice (immutability korzysta z immer, biblioteki zaimportowanej z redux toolkit)
    name: 'tasks', // nazwa
    initialState: { // stan początkowy
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addNewTask: ({ tasks }, { payload: task }) => { // tak z poprzedniego stanu powstaje nowy
            tasks.push(task); // payload to nowe zadanie do listy
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        doneTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        allTasksDone: ({ tasks }, action) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
    },
});

export const { addNewTask,
    toggleHideDone,
    doneTask,
    removeTask,
    allTasksDone
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done)
export default tasksSlice.reducer;

tasksSlice.reducer({ tasks: [] }, addNewTask({
    content: "Test",
    done: true,
}))

console.log(tasksSlice.reducer({ tasks: [] }, addNewTask({
    content: "Test",
    done: true,
})));