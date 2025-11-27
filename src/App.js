import { HashRouter, NavLink, Routes, Route } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AuthorPage from "./features/author/AuthorPage";
import {StyledNavLink, List, ListItem} from "./styled.js";

export const App = () =>
(
    <HashRouter>
        <nav>
            <List>
                <ListItem>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>

                </ListItem>
                <ListItem>
                    <StyledNavLink to="/autor"> O autorze</StyledNavLink>
                </ListItem>
            </List>
            <Routes>
                <Route path="/zadania/:id" element={<TaskPage />} />
                <Route path="/zadania" element={<TasksPage />} />
                <Route path="/autor" element={<AuthorPage />} />
                <Route path="/" element={<TasksPage />} />
            </Routes>
        </nav>
    </HashRouter>
)