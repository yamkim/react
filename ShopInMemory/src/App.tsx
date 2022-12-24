import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import NavBar from "./pages/NavBar";
import HomePage from "./pages/HomePage"
import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/users/LoginPage";
import SignupPage from "./pages/users/SignupPage";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/todo" element={<TodoPage />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;