import { SmallButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  allTasksDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectHideDone,
  fetchExampleTasks
} from "../tasksSlice.js";

const Buttons = () => {

  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <>
      <SmallButton onClick={() => dispatch(fetchExampleTasks())}>Pobierz przykładowe zadania</SmallButton>
      {!areTasksEmpty && (
        <>
          <SmallButton
            onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"}  ukończone
          </SmallButton>
          <SmallButton
            onClick={() => dispatch(allTasksDone())}
            done={isEveryTaskDone}
          >Ukończ wszystkie
          </SmallButton>
        </>
      )}
    </>
  )
};

export default Buttons;