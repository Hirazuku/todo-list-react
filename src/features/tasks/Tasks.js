import { useSelector } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";
import { selectTasks } from "./tasksSlice";

function Tasks() {

  const { tasks } = useSelector(selectTasks);

  const {
    //tasks,
    //hideDone,
    doneTask,
    removeTask,
    allTasksDone,
    addNewTask,
    //toggleHideDone
  } = useTasks();

  return (

    <Container>

      <Header
        title="Lista zadań"
      />

      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form
          />
        }
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            allTasksDone={allTasksDone}
          />
        }
        body={
          <TaskList
            tasks={tasks}
            removeTask={removeTask}
            doneTask={doneTask}
          />
        }
      />

    </Container>
  );
}

export default Tasks;