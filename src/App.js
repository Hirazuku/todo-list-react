import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
  {id: 1, content: "kawa", done: true},
  {id: 2, content: "herbata", done: false},
];

const hideDoneTasks = false;

function App() {
  return (
    <main className="list">
     <header className="header">
        <h1>Lista zadań</h1>
    </header>
        <h3 className="list__field">Dodaj nowe zadanie</h3>
        <Form />
        <h4 className="list__field list__field--biggerGap">Lista zadań</h4>
        <Buttons tasks={tasks}/>
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>
    </main>
  );
}

export default App;
