import { SmallButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, allTasksDone }) => (
  <>
    {tasks.length > 0 && (
      <>
        <SmallButton
          onClick={toggleHideDone}>
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
);

export default Buttons;