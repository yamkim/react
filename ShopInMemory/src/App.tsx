import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import HomePage from "./pages/HomePage"
import "../public/css/index.css";
import TodoPage from "./pages/TodoPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/todo" element={<TodoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;