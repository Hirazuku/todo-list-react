import { useState, useEffect } from 'react';

export const useTasks = () => {

    const defaultTasks = [
    { content: "kawa", done: true, id: 1 },
    { content: "sok", done: false, id: 2 },
];

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") || defaultTasks));

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const doneTask = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done }
            }

            return task;
        }));
    };

    const allTasksDone = () => {
        setTasks(tasks => tasks.map(task => (
            { ...task, done: true })))
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            }
        ]);
    };

    return {tasks, doneTask, removeTask, allTasksDone, addNewTask};
};