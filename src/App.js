import { HashRouter, Link, Routes, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks.js";
import Author from "./features/author/Author";

export const App = () =>
(
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/zadania">Zadania</Link>

                </li>
                <li>
                    <Link to="/autor"> O autorze</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/zadania" element={<Tasks />} />
                <Route path="/autor" element={<Author />} />
                <Route path="/" element={<Author />} />
            </Routes>
        </nav>
    </HashRouter>
)