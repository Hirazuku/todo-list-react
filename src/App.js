import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import React, { useState } from 'react';



function App() {

  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const [tasks, setTasks] = useState([
    { id: 1, content: "kawa", done: true },
    { id: 2, content: "sok", done: false },
  ]);
  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <Container>

      <Header
        title="Lista zadań"
      />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask} />}
      />


    </Container>
  );
}

export default App;
