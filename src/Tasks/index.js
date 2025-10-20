import "./buttons.css";

const Tasks = (props) => (
<ul className="list__plane"> 
    {props.tasks.map(({id, content}) => (
        <li key={id}>{content}
        </li>
    ))}
        </ul>
);

export default Tasks;