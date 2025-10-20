import Form from "./Form";
import Tasks from "./Tasks";

const tasks = [
  {id: 1, content: "kawa", done: false},
  {id: 2, content: "herbata", done: true},
];

const hideDoneTasks = [
  {id: 1, content: "kawa", done: false},
  {id: 2, content: "herbata", done: true},
];

function App() {
  return (
    <main className="list">
     <header className="header">
        <h1>Lista zadań</h1>
    </header>
        <h2 className="list__field">Dodaj nowe zadanie</h2>
        <Form />
        <h3 className="list__field list__field--biggerGap">Lista zadań</h3>
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>
    </main>
  );
}

export default App;
