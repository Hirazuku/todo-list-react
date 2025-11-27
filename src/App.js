import { HashRouter, NavLink, Routes, Route } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AuthorPage from "./features/author/AuthorPage";

export const App = () =>
(
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/zadania">Zadania</NavLink>

                </li>
                <li>
                    <NavLink activeClassName="active" to="/autor"> O autorze</NavLink>
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