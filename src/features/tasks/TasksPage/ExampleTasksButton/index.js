import { fetchExampleTasks } from "../../tasksSlice";
import { useDispatch } from "react-redux";
import { useExampleTasks } from "./useExampleTasks";
import { SmallButton, ButtonLoading } from "./styled";

export const ExampleTasksButton = () => {

    const dispatch = useDispatch();

    const exampleTasks = useExampleTasks();

    return (
        <>
            {
                exampleTasks.state === "loading"
                    ? (
                        <ButtonLoading>Ładuję...</ButtonLoading>
                    )
                    : (
                        <SmallButton onClick={() => dispatch(fetchExampleTasks())}>
                            Pobierz przykładowe zadania
                        </SmallButton >
                    )
            }
        </>
    )
}