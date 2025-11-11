import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import React, { useState, useEffect } from 'react';

const defaultTasks = [
  { content: "kawa", done: true, id: 1 },
  { content: "sok", done: false, id: 2 },
];

function App() {

  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") || defaultTasks));

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

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
  }

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

  return (

    <Container>

      <Header
        title="Lista zadań"
      />

      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form
            addNewTask={addNewTask}
          />
        }
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            allTasksDone={allTasksDone}
          />
        }
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            doneTask={doneTask}
          />
        }
      />

    </Container>
  );
}

export default App;