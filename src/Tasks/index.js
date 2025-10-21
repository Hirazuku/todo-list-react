import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
<ul className="list__plane"> 
    {tasks.map(task => (
        <li className={`list__item list__item--row ${task.done && hideDoneTasks ? " tasks__item--hidden" : ""}`} key={task.id}>
            <button 
                className={`button_done_unchecked`}> {task.done ?  "✓" : ""}</button 
              >
              <span className={`${task.done ? " list__item--done" : ""}`}>
               {task.content}</span>
              <button className="button__remove">🗑</button>
        </li>
    ))}
        </ul>
);

export default Tasks;