import { SmallButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice.js";

const Buttons = ({ allTasksDone }) => {

  const {tasks, hideDone} = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
  <>
    {tasks.length > 0 && (
      <>
        <SmallButton
          onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"}  ukończone
        </SmallButton>
        <SmallButton
          onClick={allTasksDone}
          done={tasks.every(({ done }) => done)}
        >Ukończ wszystkie
        </SmallButton>
      </>
    )}
  </>
)  
};

export default Buttons;