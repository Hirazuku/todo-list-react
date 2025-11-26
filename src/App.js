import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks.js";

export const App = () =>
(
    <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/zadania">Zadania</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/zadania" element={<Tasks />} />
            </Routes>
        </nav>
    </BrowserRouter>
)