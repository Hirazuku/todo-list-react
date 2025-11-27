import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { List, Content, Button } from "./styled";
import { doneTask, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <>
            {tasks.map(task => (
                <>
                    {task.content.trimmed !== "" && (
                        <>
                            <List
                                key={task.id}
                                hidden={task.done && hideDone}
                            >
                                <Button
                                    onClick={() => dispatch(doneTask(task.id))}
                                >
                                    {task.done ? "✓" : ""}
                                </Button>
                                <Content done={task.done}>
                                    <NavLink to={`/zadania/${task.id}`}>{task.content}</NavLink>
                                </Content>
                                <Button
                                    removeTask
                                    onClick={() => dispatch(removeTask(task.id))}
                                >🗑</Button>
                            </List>
                        </>)}
                </>))}
        </>
    )
};

export default TaskList;