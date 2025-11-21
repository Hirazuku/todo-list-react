import { useSelector } from "react-redux";
import { List, Content, Button } from "./styled";
import { selectTasks } from "../tasksSlice";

const TaskList = ({ removeTask, doneTask }) => {

    const { tasks, hideDone } = useSelector(selectTasks);

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
                                    doneTask
                                    onClick={() => doneTask(task.id)}
                                >
                                    {task.done ? "✓" : ""}
                                </Button>
                                <Content done={task.done}>
                                    {task.content}
                                </Content>
                                <Button
                                    removeTask
                                    onClick={() => removeTask(task.id)}
                                >🗑</Button>
                            </List>
                        </>)}
                </>))}
        </>
    )
};

export default TaskList;