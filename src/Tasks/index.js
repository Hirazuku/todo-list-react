import "./style.css";

const onDelete = (name) => {
    console.log(`Nazwa zadania do usunięcia: ${name}`);
}
const Tasks = ({ tasks, hideDone }) => (
    <>
        {tasks.map(task => (
            <li
                className={`task__item task__item--row ${
                    task.done && hideDone
                        ? " task__item--hidden"
                        : ""}`
                }
                key={task.id}
            >
                <button
                    className={`button_done_unchecked`}> {
                        task.done
                            ? "✓" : ""
                    }
                </button>
                <span className={`${task.done
                    ? " task__item--done" : ""}`
                }
                >
                    {task.content}</span>
                <button  className="button__remove" onClick = {() => onDelete(task.content)}>🗑</button>
            </li>
        ))}
    </>
);

export default Tasks;