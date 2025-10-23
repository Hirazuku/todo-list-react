import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  <div className="new__buttons">
  {tasks.length > 0 && (
  <>
    <button className="small__buttons"> {
      hideDoneTasks
        ? "Pokaż" : "Ukryj"}  ukończone
    </button>
    <button
      className={` small__buttons ${
        tasks.every(({ done }) => done) 
        ? "disabled__button" : ""}`
      }
      disabled={tasks.every(({ done }) => done)}
    >Ukończ wszystkie
    </button>
    </>
  )}
  </div>

);

export default Buttons;