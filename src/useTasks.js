import { useEffect, useState } from 'react';

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

    const allTasksDone = () => {
        setTasks(tasks => tasks.map(task => (
            { ...task, done: true })))
    };

    return {    
        removeTask, 
        allTasksDone,  };
};