import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, doneTask }) => (
    <>
        {tasks.map(task => (
            <>
                {task.content !== "" && (
                    <>
                        <li
                            className={`task__item task__item--row ${
                                task.done && hideDone
                                ? " task__item--hidden"
                                : ""}`
                            }
                            key={task.id}
                        >
                            <button
                                onClick={() => doneTask(task.id)}
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
                            <button onClick={() => removeTask(task.id)}
                                className="button__remove" >🗑</button>
                        </li>

                    </>)}

            </>))}
    </>
);

export default Tasks;