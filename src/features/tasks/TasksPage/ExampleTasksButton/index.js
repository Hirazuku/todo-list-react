import { fetchExampleTasks } from "../../tasksSlice";
import { useDispatch } from "react-redux";
import { SmallButton } from "./styled";

export const ExampleTasksButton = () => {

    const dispatch = useDispatch();

    return (
        <SmallButton onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </SmallButton>
    )
}