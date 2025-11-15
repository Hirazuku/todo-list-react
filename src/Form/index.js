import { useState } from 'react';
import { FormField, StyledButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
        <form onSubmit={onFormSubmit}>
            <FormField
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?" />
            <StyledButton>Dodaj do listy</StyledButton>
        </form>
    )
}

export default Form;