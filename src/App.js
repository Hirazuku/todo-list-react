import { HashRouter, NavLink, Routes, Route } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AuthorPage from "./features/author/AuthorPage";
import {StyledNavLink} from "./styled.js";

export const App = () =>
(
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>

                </li>
                <li>
                    <StyledNavLink to="/autor"> O autorze</StyledNavLink>
                </li>
            </ul>
            <Routes>
                <Route path="/zadania/:id" element={<TaskPage />} />
                <Route path="/zadania" element={<TasksPage />} />
                <Route path="/autor" element={<AuthorPage />} />
                <Route path="/" element={<TasksPage />} />
            </Routes>
        </nav>
    </HashRouter>
)