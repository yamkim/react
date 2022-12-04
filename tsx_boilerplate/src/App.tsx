import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import HomePage from "./pages/HomePage"
import "../public/css/index.css";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;