import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, allTasksDone }) => (
  <>
    {tasks.length > 0 && (
      <>
        <button onClick={toggleHideDone} className="buttons__small">
          {hideDone
            ? "Pokaż" : "Ukryj"}  ukończone
        </button>
        <button
        onClick={allTasksDone}
          className={` buttons__small ${tasks.every(({ done }) => done)
            ? "button__disabled" : ""}`
          }
          disabled={tasks.every(({ done }) => done)}
        >Ukończ wszystkie
        </button>
      </>
    )}
  </>

);

export default Buttons;