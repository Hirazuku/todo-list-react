import { useSelector, useDispatch } from "react-redux";
import { List, Content, Button } from "./styled";
import { selectTasks, doneTask, removeTask, selectHideDone } from "../tasksSlice";

const TaskList = () => {

    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <>
            {tasks.map(task => (
                <>
                    {task.content !== "" && (
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
                                    {task.content}
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