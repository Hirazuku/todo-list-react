import { useEffect, useState } from 'react';

export const useTasks = () => {

    const defaultTasks = [
        { content: "kawa", done: true, id: 1 },
        { content: "sok", done: false, id: 2 },
    ];

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") || defaultTasks));

    const [hideDone, setHideDone] = useState(false);

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

    

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    return {  
        hideDone, 
        doneTask, 
        removeTask, 
        allTasksDone,  
        toggleHideDone, };
};