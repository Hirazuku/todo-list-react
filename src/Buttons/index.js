import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  <div className="buttons__new">
    {tasks.length > 0 && (
      <>
        <button className="buttons__small"> {
          hideDoneTasks
            ? "Pokaż" : "Ukryj"}  ukończone
        </button>
        <button
          className={` buttons__small ${tasks.every(({ done }) => done)
              ? "button__disabled" : ""}`
          }
          disabled={tasks.every(({ done }) => done)}
        >Ukończ wszystkie
        </button>
      </>
    )}
  </div>

);

export default Buttons;