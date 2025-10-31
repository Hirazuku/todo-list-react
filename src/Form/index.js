import "./style.css";
import React, { useState } from 'react';



const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                className="form__field"
                placeholder="Co jest do kupienia?" />
            <button className="button">Dodaj do listy</button>
        </form>
    )
}

export default Form;