import { HashRouter, Routes, Route } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AuthorPage from "./features/author/AuthorPage";
import {StyledNavLink, List, ListItem} from "./styled.js";
import { toAuthor, toTask, toTasks } from "./routes";

export const App = () =>
(
    <HashRouter>
        <nav>
            <List>
                <ListItem>
                    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </ListItem>
                <ListItem>
                    <StyledNavLink to={toAuthor()}> O autorze</StyledNavLink>
                </ListItem>
            </List>
            <Routes>
                <Route path={toTask()} element={<TaskPage />} />
                <Route path={toTasks()} element={<TasksPage />} />
                <Route path={toAuthor()} element={<AuthorPage />} />
                <Route path="/" element={<TasksPage />} />
            </Routes>
        </nav>
    </HashRouter>
)