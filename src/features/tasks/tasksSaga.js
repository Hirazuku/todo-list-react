import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice.js";
import { getExampleTasks } from "./getExampleTasks.js";

function* fetchExampleTasksHandler(){
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "coś jest źle");
    }
}

export function* watchFetchExampleTasks() {
    console.log("saga działa");
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}