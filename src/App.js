import { HashRouter, NavLink, Routes, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks.js";
import Author from "./features/author/Author";

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
                <Route path="/zadania" element={<Tasks />} />
                <Route path="/autor" element={<Author />} />
                <Route path="/" element={<Tasks />} />
            </Routes>
        </nav>
    </HashRouter>
)